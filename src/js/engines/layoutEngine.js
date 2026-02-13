import { $, on } from '../core/dom.js';

const leftPanel = $('.left-panel');
const rightPanel = $('.right-panel');
const resizer = $('#resizer');
const toggleLeftBtn = $('#toggle-left');
const toggleRightBtn = $('#toggle-right');

const setPanelDimensions = (left, right) => {
    leftPanel.style.width = left;
    rightPanel.style.width = right;
};

const resize = (e) => {
    if (!leftPanel.classList.contains('hidden') && !rightPanel.classList.contains('hidden')) {
        const leftWidth = e.x;
        const rightWidth = window.innerWidth - leftWidth;
        setPanelDimensions(`${leftWidth}px`, `${rightWidth}px`);
    }
};

const stopResize = () => {
    window.removeEventListener('mousemove', resize);
    window.removeEventListener('mouseup', stopResize);
};

const initResize = () => {
    on(resizer, 'mousedown', (e) => {
        if (!leftPanel.classList.contains('hidden') && !rightPanel.classList.contains('hidden')) {
            e.preventDefault();
            on(window, 'mousemove', resize);
            on(window, 'mouseup', stopResize);
        }
    });
};

const toggleLeft = () => {
    const isLeftHidden = leftPanel.classList.contains('hidden');
    
    if (isLeftHidden) {
        // Show left, restore 50/50
        leftPanel.classList.remove('hidden');
        rightPanel.classList.remove('hidden');
        setPanelDimensions('50%', '50%');
    } else {
        // Hide left, make right full width
        leftPanel.classList.add('hidden');
        rightPanel.classList.remove('hidden');
        setPanelDimensions('0px', '100%');
    }
};

const toggleRight = () => {
    const isRightHidden = rightPanel.classList.contains('hidden');

    if (isRightHidden) {
        // Show right, restore 50/50
        leftPanel.classList.remove('hidden');
        rightPanel.classList.remove('hidden');
        setPanelDimensions('50%', '50%');
    } else {
        // Hide right, make left full width
        rightPanel.classList.add('hidden');
        leftPanel.classList.remove('hidden');
        setPanelDimensions('100%', '0px');
    }
};

const initToggle = () => {
    on(toggleLeftBtn, 'click', toggleLeft);
    on(toggleRightBtn, 'click', toggleRight);
};

export const init = () => {
    initResize();
    initToggle();
};
