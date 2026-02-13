import { $, setHtml, setText, disable, enable } from "../../core/dom.js";

const stageInfo = $("#stage-info");
const prevBtn = $("#prev-btn");
const nextBtn = $("#next-btn");
const progress = $("#progress");
const leftPanel = $(".left-panel");

export const updateStageContent = (title, content) => {
  setHtml(stageInfo, `<h2>${title}</h2>${content}`);
};

export const updateProgressBar = (percentage) => {
  progress.style.width = `${percentage}%`;
};

export const updateNavigation = (isFirst, isLast) => {
  disable(prevBtn);
  if (!isFirst) {
    enable(prevBtn);
  }

  setText(nextBtn, isLast ? "🎉 Finish!" : "Next ➡️");
};

export const scrollToTop = () => {
  leftPanel.scrollTop = 0;
};
