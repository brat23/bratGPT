export const stages = [
    {
        title: "🌟 Welcome to GPT's Complete World!",
        content: `
            <p><span class="emoji">👋</span> Welcome to the "How GPT Works" journey!</p>
            <p><span class="emoji">🚀</span> Get ready to unravel the magic behind large language models, step by step!</p>
                <div class="interactive-demo">
                    <h3>🏆 What You'll Learn in this Journey!</h3>
                    <p>✅ How words become numbers (Tokenization)</p>
                    <p>✅ How position matters (Position Embedding)</p>
                    <p>✅ How words find friends (Attention)</p>
                    <p>✅ How multi-head attention works (4 detectives)</p>
                    <p>✅ How masking prevents cheating (No peeking!)</p>
                    <p>✅ How thinking works (Feed Forward)</p>
                    <p>✅ How layers stack (Transformer Blocks)</p>
                    <p>✅ How predictions work (LM Head)</p>
                    <p>✅ How generation works (The Driver)</p>
                    <p>✅ How learning works (The Trainer)</p>
                </div>
            <p style="margin-top: 20px; text-align: center;">Let's start building our GPT! 🎉</p>
        `,
        codeLines: [1, 2, 3, 141, 142, 143, 145]
    },
    {
        title: "⚙️ Step 1: Configuration - The Settings!",
        content: `
            <p><span class="emoji">🎛️</span> Before we build GPT, we need to set some important settings!</p>
            <p><span class="emoji">📋</span> Think of this like choosing difficulty settings in a video game!</p>
            <div class="interactive-demo">
                <h3>🎮 The Settings Panel!</h3>
                <div class="step-box">
                    <strong>vocab_size = 100</strong> 🔢<br>
                    I know 100 different words (like a baby's first words!)
                </div>
                <div class="step-box">
                    <strong>block_size = 32</strong> 📏<br>
                    I can remember 32 words at once (my memory limit!)
                </div>
                <div class="step-box">
                    <strong>n_embd = 64</strong> 🧠<br>
                    Each word becomes 64 magic numbers
                </div>
                <div class="step-box">
                    <strong>n_head = 4</strong> 👁️<br>
                    I have 4 different "attention detectors"
                </div>
                <div class="step-box">
                    <strong>n_layer = 2</strong> 🎂<br>
                    I have 2 layers (real ChatGPT has 96!)
                </div>
            </div>
        `,
        codeLines: [7, 8, 9, 10, 11, 12, 14]
    },
    {
        title: "📦 Step 2: Tokenization - Breaking into Numbers!",
        content: `
            <p><span class="emoji">✂️</span> Words are turned into numbers that computers can understand!</p>
            <p><span class="emoji">🧩</span> It's like giving each LEGO block a unique ID number!</p>
            <div class="interactive-demo">
                <h3>🎮 Word to Number Magic!</h3>
                <div class="flow-diagram">
                    <div class="word-box" style="background: #ff4081;">Hello</div>
                    <span class="flow-arrow">→</span>
                    <div class="word-box" style="background: #00e5ff; color: var(--background-color);">Token 42</div>
                    <span class="flow-arrow">→</span>
                    <div class="word-box" style="background: #ffd700; color: var(--background-color);">64 Magic Numbers</div>
                </div>
                <div style="margin-top: 20px;">
                    <div class="word-box">world → Token 87 → [0.2, 0.5, 0.1, ...]</div>
                </div>
                <p style="margin-top: 15px; text-align: center;">Now my robot brain can read it! 🤖</p>
            </div>
        `,
        codeLines: [93, 118, 121]
    },
    {
        title: "📍 Step 3: Position - Where Are You?",
        content: `
            <p><span class="emoji">🎯</span> Position matters! "Dog bites man" ≠ "Man bites dog"!</p>
            <p><span class="emoji">🏷️</span> Each word gets a position tag (1st, 2nd, 3rd...)!</p>
            <div class="interactive-demo">
                <h3>🎮 Position Tags!</h3>
                <div class="flow-diagram">
                    <div class="word-box" style="background: #ff4081;">🥇 The (pos 0)</div>
                    <div class="word-box" style="background: #ffd700; color: var(--background-color);">🥈 cat (pos 1)</div>
                    <div class="word-box" style="background: #00e5ff; color: var(--background-color);">🥉 sits (pos 2)</div>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px; color: #e0e0e0;">
                    <strong>The Magic Formula:</strong><br>
                    <span>Word Embedding + Position Embedding = Ready to Process! ✨</span>
                </div>
            </div>
        `,
        codeLines: [94, 117, 119, 121]
    },
    {
        title: "👀 Step 4: Attention - Finding Word Friends!",
        content: `
            <p><span class="emoji">🤝</span> Each word looks at others and asks: "Who are my important friends?"</p>
            <p><span class="emoji">🔍</span> We use Query, Key, and Value - three special questions!</p>
            <div class="interactive-demo">
                <h3>🎮 The Three Questions!</h3>
                <div class="step-box" style="border-color: #ff6b6b;">
                    <strong>🔑 KEY:</strong> "What am I about?"<br>
                    <small>Like a name tag that says what the word represents</small>
                </div>
                <div class="step-box" style="border-color: #ffd93d;">
                    <strong>❓ QUERY:</strong> "What am I looking for?"<br>
                    <small>Like a search query to find related words</small>
                </div>
                <div class="step-box" style="border-color: #6bcf7f;">
                    <strong>💎 VALUE:</strong> "What do I contain?"<br>
                    <small>The actual information the word carries</small>
                </div>
                <div style="margin-top: 15px; padding: 15px; background: #ffd93d; border-radius: 10px; color: #333;">
                    <strong>When "cat" meets "fluffy":</strong><br>
                    Query × Key = High Score! ⭐⭐⭐<br>
                    → Take fluffy's VALUE and remember it!
                </div>
            </div>
        `,
        codeLines: [25, 26, 27, 40, 41, 42, 48, 50, 51, 53]
    },
    {
        title: "🎭 Step 5: Multi-Head - Multiple Detectives!",
        content: `
            <p><span class="emoji">🕵️</span> We don't look just once - we look 4 DIFFERENT ways!</p>
            <p><span class="emoji">🌈</span> Each head finds different patterns!</p>
            <div class="interactive-demo">
                <h3>🎮 The 4 Detective Heads!</h3>
                <div class="step-box" style="border-color: #ff6b6b;">
                    <strong>👁️ Head 1:</strong> Finds WHO does things<br>
                    <small>Looks for subjects and actors</small>
                </div>
                <div class="step-box" style="border-color: #ffd93d;">
                    <strong>👁️ Head 2:</strong> Finds WHAT happens<br>
                    <small>Looks for actions and verbs</small>
                </div>
                <div class="step-box" style="border-color: #6bcf7f;">
                    <strong>👁️ Head 3:</strong> Finds WHEN it happens<br>
                    <small>Looks for time-related words</small>
                </div>
                <div class="step-box" style="border-color: #4d96ff;">
                    <strong>👁️ Head 4:</strong> Finds WHERE it happens<br>
                    <small>Looks for location words</small>
                </div>
                <p style="margin-top: 15px; text-align: center;">All 4 heads work together! 🎪</p>
            </div>
        `,
        codeLines: [21, 22, 44, 45, 46]
    },
    {
        title: "🙈 Step 6: The Mask - No Peeking!",
        content: `
            <p><span class="emoji">🚫</span> When predicting the next word, NO CHEATING!</p>
            <p><span class="emoji">📖</span> We can only look BACKWARD, never forward!</p>
            <div class="interactive-demo">
                <h3>🎮 The Triangle Rule!</h3>
                <div style="background: #f0f0f0; padding: 20px; border-radius: 10px; color: #333;">
                    <strong>Predicting after "The cat":</strong><br><br>
                    <div class="word-box" style="background: #6bcf7f;">✅ The (can see)</div>
                    <div class="word-box" style="background: #6bcf7f;">✅ cat (can see)</div>
                    <div class="word-box" style="background: #ff6b6b;">❌ is (NO PEEKING!)</div>
                    <div class="word-box" style="background: #ff6b6b;">❌ cute (NO PEEKING!)</div>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: #ffd93d; border-radius: 10px; color: #333;">
                    <strong>The Mask Code:</strong><br>
                    torch.tril() creates a triangle ▼<br>
                    masked_fill() blocks future with -∞
                </div>
            </div>
        `,
        codeLines: [31, 32, 33, 34, 50]
    },
    {
        title: "🤔 Step 7: Feed Forward - The Thinking Muscle!",
        content: `
            <p><span class="emoji">💭</span> After attention, we need to THINK about what we learned!</p>
            <p><span class="emoji">🏋️</span> Make it bigger → Think hard → Make it smaller!</p>
            <div class="interactive-demo">
                <h3>🎮 The Thinking Process!</h3>
                <div class="flow-diagram">
                    <div class="flow-box" style="background: #ff4081;">📥 64 numbers<br>in</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-box" style="background: #ffd700; color: var(--background-color);">💪 256 numbers<br>(×4 bigger!)</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-box" style="background: #00e5ff; color: var(--background-color);">🤔 ReLU<br>Think!</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-box" style="background: #ff4081;">📤 64 numbers<br>out</div>
                </div>
                <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.05); border-radius: 10px; color: #e0e0e0;">
                    <strong>Why make it bigger then smaller?</strong><br>
                    More space = More thinking power! 🧠<br>
                    Then compress the answer back down! 📦
                </div>
            </div>
        `,
        codeLines: [62, 63, 64, 69, 70]
    },
    {
        title: "🎂 Step 8: Transformer Blocks - The Layer Cake!",
        content: `
            <p><span class="emoji">📚</span> Stack multiple layers like a delicious cake!</p>
            <p><span class="emoji">🔄</span> Each layer does: Attention → Think → Repeat!</p>
            <div class="interactive-demo">
                <h3>🎮 The Layer Cake!</h3>
                <div class="flow-diagram">
                    <div class="flow-box flow-box-brain" style="width: 300px;">📥 Input Words</div>
                </div>
                <div style="margin: 10px 0; text-align: center; font-size: 2em;">↓</div>
                <div class="flow-diagram">
                    <div class="flow-box flow-box-driver" style="width: 300px;">
                        🍰 Layer 1<br>
                        <small>LayerNorm → Attention → Add<br>LayerNorm → FeedForward → Add</small>
                    </div>
                </div>
                <div style="margin: 10px 0; text-align: center; font-size: 2em;">↓</div>
                <div class="flow-diagram">
                    <div class="flow-box flow-box-trainer" style="width: 300px; color: var(--background-color);">
                        🍰 Layer 2<br>
                        <small>LayerNorm → Attention → Add<br>LayerNorm → FeedForward → Add</small>
                    </div>
                </div>
                <div style="margin: 10px 0; text-align: center; font-size: 2em;">↓</div>
                <div class="flow-diagram">
                    <div class="flow-box flow-box-final" style="width: 300px;">📤 Smart Output!</div>
                </div>
                <p style="margin-top: 15px; text-align: center;">Real GPT-4 has 120+ layers! 🏢</p>
            </div>
        `,
        codeLines: [76, 77, 78, 79, 80, 81, 84, 85, 86, 96, 97]
    },
    {
        title: "🎯 Step 9: Prediction - Scoring Words!",
        content: `
            <p><span class="emoji">🎰</span> Finally, we score each possible next word!</p>
            <p><span class="emoji">🏆</span> The word with the highest score usually wins!</p>
            <div class="interactive-demo">
                <h3>🎮 The Scoring System!</h3>
                <div class="flow-diagram">
                    <div class="flow-box flow-box-brain">All layers<br>finished!</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-box flow-box-trainer">LayerNorm<br>(final cleanup)</div>
                    <span class="flow-arrow">→</span>
                    <div class="flow-box flow-box-driver">LM Head<br>(100 scores)</div>
                </div>
                <div class="score-display" style="margin-top: 20px;">
                    After "I love to eat"...<br><br>
                    🍕 pizza: 95 points ⭐⭐⭐⭐⭐<br>
                    🍎 apples: 87 points ⭐⭐⭐⭐<br>
                    🥗 salad: 76 points ⭐⭐⭐<br>
                    🚗 cars: 12 points ⭐<br>
                    🌙 moon: 5 points
                </div>
                <p style="margin-top: 15px; text-align: center; color: #e0e0e0;">Winner: PIZZA! 🍕🎉</p>
            </div>
        `,
        codeLines: [99, 100, 123, 125]
    },
    {
        title: "🚗 Step 10: THE DRIVER - Generate Function!",
        content: `
            <p><span class="emoji">🎉</span> WE BUILT THE BRAIN! Now let's make it SPEAK!</p>
            <p><span class="emoji">🔄</span> The generate function creates new words in a loop!</p>
            <div class="interactive-demo">
                <h3>🎮 How Generation Works!</h3>
                <div class="step-box" style="border-color: #ff4081;">
                    <strong>Step 1: Start</strong> 🎬<br>
                    Start with one word (or empty: token 0)
                </div>
                <div class="step-box" style="border-color: #00e5ff;">
                    <strong>Step 2: Predict</strong> 🔮<br>
                    Run through all layers → Get scores
                </div>
                <div class="step-box" style="border-color: #ffd700;">
                    <strong>Step 3: Pick</strong> 🎲<br>
                    Use softmax to turn scores into probabilities<br>
                    Sample randomly based on those probabilities!
                </div>
                <div class="step-box" style="border-color: #ff4081;">
                    <strong>Step 4: Add</strong> ➕<br>
                    Append the new word to the sequence
                </div>
                <div class="step-box" style="border-color: #00e5ff;">
                    <strong>Step 5: Repeat</strong> 🔄<br>
                    Go back to Step 2 until we have enough words!
                </div>
                <div class="score-display" style="margin-top: 20px; background: linear-gradient(135deg, #00e5ff, #ff4081);">
                    Example: [0] → [0, 45] → [0, 45, 23] → [0, 45, 23, 67]...<br>
                    Each number is a word! 🎯
                </div>
            </div>
        `,
        codeLines: [130, 131, 132, 133, 134, 135, 136, 137, 138]
    },
    {
        title: "🎮 Step 11: Line-by-Line Generate Breakdown!",
        content: `
            <p><span class="emoji">🔍</span> Let's understand EVERY line of the generate function!</p>
            <div class="interactive-demo">
                <h3>🎮 The Generate Loop!</h3>
                <div class="step-box">
                    <code style="color: #ff4081;">for _ in range(max_new_tokens):</code><br>
                    <strong>Meaning:</strong> Repeat this process for however many new words we want!
                </div>
                <div class="step-box">
                    <code style="color: #00e5ff;">idx_cond = idx[:, -config.block_size:]</code><br>
                    <strong>Meaning:</strong> Crop to last 32 words (our memory limit!)
                </div>
                <div class="step-box">
                    <code style="color: #ffd700;">logits = self(idx_cond)</code><br>
                    <strong>Meaning:</strong> Run through the whole GPT model!
                </div>
                <div class="step-box">
                    <code style="color: #ff4081;">logits = logits[:, -1, :]</code><br>
                    <strong>Meaning:</strong> Only care about the LAST word's prediction
                </div>
                <div class="step-box">
                    <code style="color: #00e5ff;">probs = F.softmax(logits, dim=-1)</code><br>
                    <strong>Meaning:</strong> Turn scores into probabilities (0-100%)
                </div>
                <div class="step-box">
                    <code style="color: #ffd700;">idx_next = torch.multinomial(probs, num_samples=1)</code><br>
                    <strong>Meaning:</strong> Roll a weighted dice! Pick randomly but favor high scores
                </div>
                <div class="step-box">
                    <code style="color: #ff4081;">idx = torch.cat((idx, idx_next), dim=1)</code><br>
                    <strong>Meaning:</strong> Glue the new word onto the end!
                </div>
            </div>
        `,
        codeLines: [131, 132, 133, 134, 135, 136, 137]
    },
    {
        title: "🧪 Step 12: Testing the Model!",
        content: `
            <p><span class="emoji">🔬</span> Let's see if our GPT actually works!</p>
            <p><span class="emoji">⚠️</span> Without training, it outputs RANDOM tokens (garbage)!</p>
            <div class="interactive-demo">
                <h3>🎮 The Test Run!</h3>
                <div class="step-box" style="border-color: #ff4081;">
                    <code style="color: #e0e0e0;">model = GPT(config)</code><br>
                    <strong>Meaning:</strong> Create a brand new baby GPT! 👶
                </div>
                <div class="step-box" style="border-color: #00e5ff;">
                    <code style="color: #e0e0e0;">sample_input = torch.randint(0, config.vocab_size, (2, 10))</code><br>
                    <strong>Meaning:</strong> Create 2 sentences with 10 random words each
                </div>
                <div class="step-box" style="border-color: #ffd700;">
                    <code style="color: #e0e0e0;">output = model(sample_input)</code><br>
                    <strong>Meaning:</strong> Run it through GPT!
                </div>
                <div class="step-box" style="border-color: #ff4081;">
                    <code style="color: #e0e0e0;">print(output.shape)  # (2, 10, vocab_size)</code><br>
                    <strong>Meaning:</strong> Should output: torch.Size([2, 10, 100])<br>
                    2 sentences × 10 positions × 100 possible next words!
                </div>
                <div class="score-display" style="background: linear-gradient(135deg, #00e5ff, #ff4081);">
                    ✅ IT WORKS! The architecture is complete! 🎉
                </div>
            </div>
        `,
        codeLines: [141, 142, 143, 145]
    },
    {
        title: "🎭 Step 13: Generation Test!",
        content: `
            <p><span class="emoji">🎪</span> Let's make GPT actually GENERATE text!</p>
            <p><span class="emoji">🎲</span> Remember: untrained = random gibberish!</p>
            <div class="interactive-demo">
                <h3>🎮 Making GPT Talk!</h3>
                <div class="step-box" style="border-color: #ff4081;">
                    <strong>Step 1: Start</strong> 🎬<br>
                    Start with one word (or empty: token 0)
                </div>
                <div class="step-box" style="border-color: #ffd700;">
                    <strong>Step 2: Predict</strong> 🔮<br>
                    Run through all layers → Get scores
                </div>
                <div class="step-box" style="border-color: #00e5ff;">
                    <strong>Step 3: Pick</strong> 🎲<br>
                    Use softmax to turn scores into probabilities<br>
                    Sample randomly based on those probabilities!
                </div>
                <div style="margin-top: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 10px; color: #e0e0e0;">
                    <strong>⚠️ Why is it gibberish?</strong><br>
                    The model hasn't learned anything yet! It's like a baby making random sounds.<br>
                    We need THE TRAINER to teach it! 📚
                </div>
            </div>
        `,
        codeLines: [148, 149, 150]
    },
    {
        title: "📚 Step 14: THE TRAINER - How GPT Learns!",
        content: `
            <p><span class="emoji">🎓</span> The TRAINER makes GPT smart by showing it examples!</p>
            <p><span class="emoji">📖</span> It reads text, predicts, makes mistakes, and learns from them!</p>
            <div class="interactive-demo">
                <h3>🎮 The Learning Loop!</h3>
                <div class="step-box" style="border-color: #ff4081;">
                    <strong>Step 1: Get Training Data</strong> 📚<br>
                    Load a book, Wikipedia, or any text!<br>
                    Example: "The cat sat on the mat"
                </div>
                <div class="step-box" style="border-color: #00e5ff;">
                    <strong>Step 2: Make a Prediction</strong> 🔮<br>
                    Input: "The cat sat on the"<br>
                    GPT predicts: "moon" (WRONG!)
                </div>
                <div class="step-box" style="border-color: #ffd700;">
                    <strong>Step 3: Calculate Error (Loss)</strong> ❌<br>
                    Compare prediction to real answer ("mat")<br>
                    Loss = How wrong was it? (Big number = very wrong!)
                </div>
                <div class="step-box" style="border-color: #ff4081;">
                    <strong>Step 4: Update Weights</strong> 🔧<br>
                    Adjust the model's numbers slightly<br>
                    Make it more likely to say "mat" next time!
                </div>
                <div class="step-box" style="border-color: #00e5ff;">
                    <strong>Step 5: Repeat MILLIONS of times!</strong> 🔄<br>
                    After seeing millions of examples...<br>
                    GPT becomes SMART! 🧠✨
                </div>
            </div>
        `,
        codeLines: [154, 157, 158, 160, 161, 162, 164, 165, 166]
    },
    {
        title: "🔧 Step 15: Training Code Breakdown!",
        content: `
            <p><span class="emoji">💻</span> Here's how you'd write a trainer (not in our code, but you need it!):</p>
            <div class="interactive-demo">
                <h3>🎮 The Training Code!</h3>
                <div class="code-highlight" style="background: rgba(255,255,255,0.05); color: #e0e0e0; text-align: left;">
<strong style="color: #ff4081;"># 1. Setup</strong>
optimizer = torch.optim.Adam(model.parameters(), lr=3e-4)

<strong style="color: #ffd700;"># 2. The Training Loop</strong>
for epoch in range(1000):  # Repeat 1000 times
    
    <strong style="color: #00e5ff;"># Get a batch of training data</strong>
    inputs, targets = get_batch(training_data)
    
    <strong style="color: #ff4081;"># Forward pass: Get predictions</strong>
    logits = model(inputs)
    
    <strong style="color: #ffd700;"># Calculate loss (how wrong are we?)</strong>
    loss = F.cross_entropy(logits.view(-1, vocab_size), targets.view(-1))
    
    <strong style="color: #00e5ff;"># Backward pass: Calculate gradients</strong>
    optimizer.zero_grad()
    loss.backward()
    
    <strong style="color: #ff4081;"># Update weights: Learn from mistakes!</strong>
    optimizer.step()
    
    print(f"Loss: {loss.item()}")  # Watch it get smaller! 📉
                        </div>
                        <div class="score-display" style="background: linear-gradient(135deg, #00e5ff, #ff4081); margin-top: 20px;">
                            After training: Loss goes from 4.6 → 0.3! 🎉<br>
                            GPT gets SMARTER with each step! 🧠
                        </div>
                    </div>
                `,
        codeLines: [154, 157, 158, 160, 161, 162, 164, 165, 166]
    },
    {
        title: "🎊 The Complete Picture!",
        content: `
            <p><span class="emoji">🌟</span> You did it! You understand GPT from scratch!</p>
            <div class="interactive-demo">
                <h3>🎮 The Complete Journey!</h3>
                <div class="flow-diagram" style="flex-direction: column;">
                    <div class="flow-box flow-box-brain" style="width: 80%;">
                        🧠 <strong>THE BRAIN (Architecture)</strong><br>
                        <small>Config → Embeddings → Attention → FeedForward → Blocks → Prediction</small>
                    </div>
                    <div style="margin: 10px 0; font-size: 2em;">+</div>
                    <div class="flow-box flow-box-driver" style="width: 80%;">
                        🚗 <strong>THE DRIVER (Generate)</strong><br>
                        <small>Loop → Crop → Predict → Sample → Append → Repeat</small>
                    </div>
                    <div style="margin: 10px 0; font-size: 2em;">+</div>
                    <div class="flow-box flow-box-trainer" style="width: 80%;">
                        📚 <strong>THE TRAINER (Learning)</strong><br>
                        <small>Data → Forward → Loss → Backward → Update Weights → Repeat</small>
                    </div>
                    <div style="margin: 10px 0; font-size: 2em;">=</div>
                    <div class="flow-box flow-box-final" style="width: 80%;">
                        ✨ <strong>WORKING GPT!</strong><br>
                        <small>Can understand and generate human-like text!</small>
                    </div>
                </div>
                
                <div class="score-display" style="margin-top: 20px; background: linear-gradient(135deg, #ff4081, #ffd700);">
                    🎉 You're now a GPT Expert! 🎉<br>
                    The code is COMPLETE and RUNNABLE!<br>
                    Just add training data to make it smart! 🚀
                </div>
            </div>
        `,
        codeLines: [1, 2, 3, 141, 142, 143, 145, 148, 149, 150]
    }
];
