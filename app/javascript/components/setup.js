import { drawTimer, setupTimer } from '../components/timer';
import { setupControls } from '../components/controls';
import { scene } from './map';
import { setupMap, preloadMap } from "./map"


function setup() {
  // setupTimer();
  setupControls();
  setupMap();
}

function preload() {
  preloadMap();
}

function draw() {
  // drawTimer();
}

export { draw, preload, setup };