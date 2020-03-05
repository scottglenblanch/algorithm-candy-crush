import './index.css';
import drawGrid from './drawGrid';
import bindClickEventsToGrid from './bindClickEventsToGrid';

function runWhenDomLoaded() {
  drawGrid();
  bindClickEventsToGrid();
}

window.addEventListener("DOMContentLoaded", runWhenDomLoaded);


