import { drawTimer, setupTimer } from '../components/timer';
import { setupControls } from '../components/controls';
import { scene } from './map';

function setup() {
  // setupTimer();
  setupControls();
}

function draw() {
  // drawTimer();
  scene.loadTileset(scene.tiles);
}

export { draw, setup };