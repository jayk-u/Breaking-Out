import * as map from "../maps/japanese_house.json"

var scene = {
  tiles: JSON.parse(JSON.stringify(map)).default,
  layers: [],
  renderLayer: function(layer) {
    var c = $("canvas")[0].getContext("2d");
    if (layer.type !== "tilelayer" || !layer.opacity) { return; }
      var s = c.canvas.cloneNode(),
      size = scene.data.tilewidth;
      s = s.getContext("2d");
      if (scene.layers.length < scene.data.layers.length) {
        layer.data.forEach(function(tile_idx, i) {
          if (!tile_idx) { return; }
          var img_x, img_y, s_x, s_y,
          tile = scene.data.tilesets[0];
        tile_idx--;
        img_x = (tile_idx % (tile.imagewidth / size)) * size;
        img_y = ~~(tile_idx / (tile.imagewidth / size)) * size;
        s_x = (i % layer.width) * size;
        s_y = ~~(i / layer.width) * size;
        s.drawImage(scene.tileset, img_x, img_y, size, size,
                          s_x, s_y, size, size);
      });
    scene.layers.push(s.canvas.toDataURL());
    c.drawImage(s.canvas, 0, 0);
  } else {
    scene.layers.forEach(function(src) {
      var i = $("<img />", { src: src })[0];
      c.drawImage(i, 0, 0);
    });
  }
   },
  renderLayers: function(layers) {
    layers = $.isArray(layers) ? layers : this.data.layers;
    layers.forEach(this.renderLayer);
   },
  loadTileset: function(json) {
    this.data = json;
    this.tileset = $("<img />", { src: "/images/japanese_house.png"})
    this.tileset.onload = $.proxy(this.renderLayers, this);
   },
}

export { scene }