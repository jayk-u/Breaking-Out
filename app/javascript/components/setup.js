import { drawTimer, setupTimer } from '../components/timer';
import { drawControls, setupControls } from '../components/controls';

function setup() {
  setupTimer();
  setupControls();
}

function draw() {
  drawTimer();
  drawControls();
}

export { draw, setup };