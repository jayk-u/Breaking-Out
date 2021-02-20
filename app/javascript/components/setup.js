import { drawTimer, setupTimer } from '../components/timer';
import { setupControls } from '../components/controls';
import * as config from './map';

function setup() {
  // setupTimer();
  setupControls();
}

function draw() {
  // drawTimer();
  // scene.loadTileset(scene.tiles);
  config;
}

export { draw, setup };