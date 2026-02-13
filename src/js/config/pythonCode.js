export const pythonCode = `import torch
import torch.nn as nn
import torch.nn.functional as F

# -----------------
# CONFIG
# -----------------
class Config:
    vocab_size = 100
    block_size = 32
    n_embd = 64
    n_head = 4
    n_layer = 2

config = Config();

# -----------------
# SELF ATTENTION
# -----------------
class CausalSelfAttention(nn.Module):
    def __init__(self, config):
        super().__init__()
        
        self.n_head = config.n_head
        self.head_dim = config.n_embd // config.n_head
        
        self.key = nn.Linear(config.n_embd, config.n_embd)
        self.query = nn.Linear(config.n_embd, config.n_embd)
        self.value = nn.Linear(config.n_embd, config.n_embd)
        
        self.proj = nn.Linear(config.n_embd, config.n_embd)
        
        self.register_buffer(
            "mask",
            torch.tril(torch.ones(config.block_size, config.block_size))
        )
    
    def forward(self, x):
        B, T, C = x.shape
        
        k = self.key(x)
        q = self.query(x)
        v = self.value(x)
        
        k = k.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        q = q.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        v = v.view(B, T, self.n_head, self.head_dim).transpose(1, 2)
        
        att = (q @ k.transpose(-2, -1)) / (self.head_dim ** 0.5)
        
        att = att.masked_fill(self.mask[:T, :T] == 0, float('-inf'))
        att = F.softmax(att, dim=-1)
        
        out = att @ v
        out = out.transpose(1, 2).contiguous().view(B, T, C)
        
        return self.proj(out)

# -----------------
# FEEDFORWARD
# -----------------
class FeedForward(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(config.n_embd, 4 * config.n_embd),
            nn.ReLU(),
            nn.Linear(4 * config.n_embd, config.n_embd),
        )
    
    def forward(self, x):
        return self.net(x)

# -----------------
# TRANSFORMER BLOCK
# -----------------
class Block(nn.Module):
    def __init__(self, config):
        super().__init__()
        self.ln1 = nn.LayerNorm(config.n_embd)
        self.ln2 = nn.LayerNorm(config.n_embd)
        self.sa = CausalSelfAttention(config)
        self.ffwd = FeedForward(config)
    
    def forward(self, x):
        x = x + self.sa(self.ln1(x))
        x = x + self.ffwd(self.ln2(x))
        return x

# -----------------
# GPT MODEL
# -----------------
class GPT(nn.Module):
    def __init__(self, config):
        super().__init__()
        
        self.token_embedding = nn.Embedding(config.vocab_size, config.n_embd)
        self.position_embedding = nn.Embedding(config.block_size, config.n_embd)
        
        self.blocks = nn.Sequential(
            *[Block(config) for _ in range(config.n_layer)]
        )
        
        self.ln_f = nn.LayerNorm(config.n_embd)
        self.lm_head = nn.Linear(config.n_embd, config.vocab_size)
    
    def forward(self, idx):
        B, T = idx.shape
        
        pos = torch.arange(0, T, device=idx.device)
        tok_emb = self.token_embedding(idx)
        pos_emb = self.position_embedding(pos)
        
        x = tok_emb + pos_emb
        x = self.blocks(x)
        x = self.ln_f(x)
        
        logits = self.lm_head(x)
        return logits
    
    # -----------------
    # GENERATE FUNCTION
    # -----------------
    def generate(self, idx, max_new_tokens):
        for _ in range(max_new_tokens):
            idx_cond = idx[:, -config.block_size:]
            logits = self(idx_cond)
            logits = logits[:, -1, :]
            probs = F.softmax(logits, dim=-1)
            idx_next = torch.multinomial(probs, num_samples=1)
            idx = torch.cat((idx, idx_next), dim=1)
        return idx

# -----------------
# TEST RUN
# -----------------
model = GPT(config)
sample_input = torch.randint(0, config.vocab_size, (2, 10))
output = model(sample_input)

print(output.shape)  # (2, 10, vocab_size)

# -----------------
# GENERATION TEST
# -----------------
context = torch.zeros((1, 1), dtype=torch.long)
generated_ids = model.generate(context, max_new_tokens=20)
print("Generated tokens:", generated_ids)

# -----------------
# TRAINING (Hypothetical)
# -----------------
optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3)

# Example training data
inputs = torch.randint(0, config.vocab_size, (8, config.block_size))
targets = torch.randint(0, config.vocab_size, (8, config.block_size))

for i in range(100): # 100 steps of training
    logits = model(inputs)
    loss = F.cross_entropy(logits.view(-1, config.vocab_size), targets.view(-1))
    
    optimizer.zero_grad(set_to_none=True)
    loss.backward()
    optimizer.step()
    
    if i % 10 == 0:
        print(f"Step {i}, Loss: {loss.item()}")
`;
