import * as map from "../maps/japanese_house.json"


// VanillaJS
// var scene = {
//   tiles: JSON.parse(JSON.stringify(map)).default,
//   layers: [],
//   renderLayer: function(layer) {
//     var c = $("canvas")[0].getContext("2d");
//     if (layer.type !== "tilelayer" || !layer.opacity) { return; }
//       var s = c.canvas.cloneNode(),
//       size = scene.data.tilewidth;
//       s = s.getContext("2d");
//       if (scene.layers.length < scene.data.layers.length) {
//         layer.data.forEach(function(tile_idx, i) {
//           if (!tile_idx) { return; }
//           var img_x, img_y, s_x, s_y,
//           tile = scene.data.tilesets[0];
//         tile_idx--;
//         img_x = (tile_idx % (tile.imagewidth / size)) * size;
//         img_y = ~~(tile_idx / (tile.imagewidth / size)) * size;
//         s_x = (i % layer.width) * size;
//         s_y = ~~(i / layer.width) * size;
//         s.drawImage(scene.tileset, img_x, img_y, size, size,
//                           s_x, s_y, size, size);
//       });
//     scene.layers.push(s.canvas.toDataURL());
//     c.drawImage(s.canvas, 0, 0);
//   } else {
//     scene.layers.forEach(function(src) {
//       var i = $("<img />", { src: src })[0];
//       c.drawImage(i, 0, 0);
//     });
//   }
//    },
//   renderLayers: function(layers) {
//     layers = $.isArray(layers) ? layers : this.data.layers;
//     layers.forEach(this.renderLayer);
//    },
//   loadTileset: function(json) {
//     this.data = json;
//     this.tileset = $("<img />", { src: "/images/japanese_house.png"})
//     this.tileset.onload = $.proxy(this.renderLayers, this);
//    },
// }
// export { scene }

var config = {
  type: Phaser.WEBGL,
  width: 800,
  height: 600,
  backgroundColor: '#2d2d2d',
  parent: 'phaser-example',
  pixelArt: true,
  scene: {
      preload: preload,
      create: create,
      update: update
  }
};

var game = new Phaser.Game(config);
var controls;

function preload ()
{
  this.load.image('tiles', '/images/japanese_house.png');
  this.load.tilemapTiledJSON('map', '/images/japanese_house.json');
}

function create ()
{
  var map = this.make.tilemap({ key: 'map' });

  // The first parameter is the name of the tileset in Tiled and the second parameter is the key
  // of the tileset image used when loading the file in preload.
  var tiles = map.addTilesetImage('japanese_house', 'tiles');

  // You can load a layer from the map using the layer name from Tiled, or by using the layer
  // index (0 in this case).
  var layer = map.createLayer(0, tiles, 0, 0);

  this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  var cursors = this.input.keyboard.createCursorKeys();
  var controlConfig = {
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      speed: 0.5
  };
  controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);

  var help = this.add.text(16, 16, 'Arrow keys to scroll', {
      fontSize: '18px',
      padding: { x: 10, y: 5 },
      backgroundColor: '#000000',
      fill: '#ffffff'
  });
  help.setScrollFactor(0);
}

function update (time, delta)
{
  controls.update(delta);
}


export { config }