import { stages } from "../../config/stages.js";
import * as ui from "./ui.js";
import { highlightLines } from "../codeViewerEngine/codeViewer.js";

let currentStage = 0;

const updateStage = () => {
  const stage = stages[currentStage];
  ui.updateStageContent(stage.title, stage.content);
  highlightLines(stage.codeLines);

  const progress = ((currentStage + 1) / stages.length) * 50; // 50% of the screen
  ui.updateProgressBar(progress);

  ui.updateNavigation(currentStage === 0, currentStage === stages.length - 1);
  ui.scrollToTop();
};

export const next = () => {
  if (currentStage < stages.length - 1) {
    currentStage++;
    updateStage();
  } else {
    alert(
      "🎉 Congratulations! You completed the COMPLETE GPT journey!\n\n" +
        "You now understand:\n" +
        "✅ The Architecture (Brain)\n" +
        "✅ The Generator (Driver)\n" +
        "✅ The Trainer (Learning)\n\n" +
        "You're now a GPT Expert! 🚀"
    );
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
};

export const previous = () => {
  if (currentStage > 0) {
    currentStage--;
    updateStage();
  }
};

export const init = () => {
  updateStage();
};
