import { drawTimer, setupTimer } from '../components/timer';
import { setupControls } from '../components/controls';

function setup() {
  setupTimer();
  setupControls();
}

function draw() {
  drawTimer();
}

export { draw, setup };