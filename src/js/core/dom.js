export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

export const hide = (element) => {
  if (element) {
    element.style.display = "none";
  }
};

export const show = (element, display = "block") => {
  if (element) {
    element.style.display = display;
  }
};

export const disable = (element) => {
  if (element) {
    element.disabled = true;
  }
};

export const enable = (element) => {
  if (element) {
    element.disabled = false;
  }
};

export const setHtml = (element, html) => {
  if (element) {
    element.innerHTML = html;
  }
};

export const setText = (element, text) => {
  if (element) {
    element.textContent = text;
  }
};

export const addClass = (element, className) => {
  if (element) {
    element.classList.add(className);
  }
};

export const removeClass = (element, className) => {
  if (element) {
    element.classList.remove(className);
  }
};

export const on = (element, event, handler, options) => {
  if (element) {
    element.addEventListener(event, handler, options);
  }
};
