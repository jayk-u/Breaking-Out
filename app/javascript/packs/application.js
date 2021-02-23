// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import * as modals from "../components/modals";
import { draw, setup } from '../components/setup';
import { interaction } from '../components/interaction';
import { defineControls } from '../components/controls';
import { animate } from "../channels/script"

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

// The following codelines are used to initialize setup and draw of the timer (as of now, only timer.js uses the setup and draw function)
// window.setup = () => {
//   setup();
//   interaction();
// };
// window.draw = draw;

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:
  // initSelect2();
  modals;
  defineControls();
  animate();
});
