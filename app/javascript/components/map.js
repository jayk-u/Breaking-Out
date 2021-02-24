import * as map from "../maps/japanese_house.json"
import { canvas } from "../channels/script.js"

let house
const json = map.default;

var scene = {
  layers: [],
  data: json,
  renderLayer: function(layer) {
    console.log(layer)
    if (layer.type !== "tilelayer" || !layer.opacity) { return; }
    // console.log(canvas, canvas.canvas)
    // var s = canvas.canvas.cloneNode()
    const size = scene.data.tilewidth;
    // s = s.getContext("2d");
    // if (scene.layers.length < scene.data.layers.length) {
      layer.data.forEach(function(tile_idx, i) {
        if (!tile_idx) { return; }
        var img_x, img_y, s_x, s_y,
        tile = scene.data.tilesets[0];
        tile_idx--;
        img_x = (tile_idx % (tile.imagewidth / size)) * size;
        img_y = ~~(tile_idx / (tile.imagewidth / size)) * size;
        s_x = (i % layer.width) * size;
        s_y = ~~(i / layer.width) * size;
        fill(100)
        rect(img_x, img_y, size, size)
        // s.drawImage(scene.tileset, img_x, img_y, size, size,
                            // s_x, s_y, size, size);
      });
    // scene.layers.push(s.canvas.toDataURL());
    // canvas.drawImage(s.canvas, 0, 0);
  // } else {
  //     scene.layers.forEach(function(src) {
  //     var i = $("<img />", { src: src })[0];
  //     canvas.drawImage(i, 0, 0);
  //   });
  // }
  },
  renderLayers: function() {
    // layers = $.isArray(layers) ? layers : this.data.layers;
    console.log(this.layers)
    this.data.layers.forEach(this.renderLayer);
   },
  // loadTileset: function(json) {
  //   this.data = json;
  //   this.tileset = $("<img />", { src: json.tilesets[0].source})
  //   this.renderLayers();
  //  },
}

function preloadMap() {
  house = loadImage("/images/japanese_house.png");
}

function setupMap() {
  image(house,0,0);
  scene.renderLayers();
}

export { preloadMap, setupMap }