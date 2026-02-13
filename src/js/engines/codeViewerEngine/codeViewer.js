import { pythonCode } from "../../config/pythonCode.js";
import * as ui from "./ui.js";

export const init = () => {
  ui.clearCodeViewer();
  const lines = pythonCode.split("\n");
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    const lineElement = ui.createCodeLine(line, lineNum);
    ui.appendCodeLine(lineElement);
  });
};

export const highlightLines = (lineNumbers) => {
  ui.highlightCodeLines(lineNumbers);
};
