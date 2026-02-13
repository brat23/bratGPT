import { $ } from "../../core/dom.js";

const codeViewer = $("#code-viewer");

export const createCodeLine = (line, lineNum) => {
  const lineDiv = document.createElement("div");
  lineDiv.classList.add("code-line");
  lineDiv.dataset.line = lineNum;

  const lineNumSpan = document.createElement("span");
  lineNumSpan.classList.add("line-number");
  lineNumSpan.textContent = lineNum;

  const lineContentSpan = document.createElement("span");
  lineContentSpan.classList.add("line-content");
  lineContentSpan.innerHTML = hljs.highlight(line, { language: "python" }).value || " ";

  lineDiv.appendChild(lineNumSpan);
  lineDiv.appendChild(lineContentSpan);

  return lineDiv;
};

export const appendCodeLine = (lineElement) => {
  codeViewer.appendChild(lineElement);
};

export const clearCodeViewer = () => {
  codeViewer.innerHTML = "";
};

export const highlightCodeLines = (lineNumbers) => {
  document.querySelectorAll(".code-line.highlight").forEach((line) => {
    line.classList.remove("highlight");
  });

  lineNumbers.forEach((lineNum) => {
    const line = document.querySelector(`.code-line[data-line="${lineNum}"]`);
    if (line) {
      line.classList.add("highlight");
      if (lineNum === lineNumbers[0]) {
        line.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  });
};
