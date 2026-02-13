import { on, $ } from "./core/dom.js";
import * as codeViewer from "./engines/codeViewerEngine/codeViewer.js";
import * as learningEngine from "./engines/learningEngine/learningEngine.js";
import * as layoutEngine from "./engines/layoutEngine.js";

const prevBtn = $("#prev-btn");
const nextBtn = $("#next-btn");

const init = () => {
  codeViewer.init();
  learningEngine.init();
  layoutEngine.init();

  on(prevBtn, "click", learningEngine.previous);
  on(nextBtn, "click", learningEngine.next);
};

window.onload = init;
