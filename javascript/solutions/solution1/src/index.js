import './index.css';
import drawGrid from './drawGrid';
import bindClickEventsToGrid from './bindClickEventsToGrid';

const runWhenDomLoaded = () => {
  drawGrid();
  bindClickEventsToGrid();
};

document.addEventListener("DOMContentLoaded", runWhenDomLoaded);


