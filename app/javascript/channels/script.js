import { controls } from '../components/controls'

var canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
// console.log(canvas.getContext);
// console.log(ctx);
canvas.width = 800;
canvas.height = 500;
const playerSprite = new Image();
playerSprite.src = "/images/hulk.png";
const background = new Image();
background.src = "/images/japanese_house.png"

const keys = [];

const player = {
  x: 200,
  y: 300,
  width: playerSprite.width / 4,
  height: playerSprite.height / 4,
  frameX: 0,
  frameY: 0,
  speed: 5,
  moving: false
}

const drawSprite = (img, sX, sY, sW, sH, dX, dY, dW, dH) => {
  ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

const movePlayer = () => {
  if (Object.keys(keys).length == 1) {
    if (keys[controls["Upkey"]] && player.y > 95) {
      player.y -= player.speed;
      player.frameY = 3;
      player.moving = true;
    }
    if (keys[controls["Downkey"]] && player.y < 370) { // 446
      player.y += player.speed;
      player.frameY = 0;
      player.moving = true;
    }
    if (keys[controls["Leftkey"]] && player.x > 15) {
      player.x -= player.speed;
      player.frameY = 1;
      player.moving = true;
    }
    if (keys[controls["Rightkey"]] && player.x < canvas.width - player.width) { // 764
      player.x += player.speed;
      player.frameY = 2;
      player.moving = true;
    }
  }
  else {
    player.moving = false;
  }
}

const handlePlayerFrame = () => {
  if (player.frameX < 3 && player.moving) player.frameX++
  else player.frameX = 0;
}

window.addEventListener("keydown", (event) => {
  // console.log(Object(event));
  // console.log(event);
  console.log(event)
  console.log(keys[event])
  keys[event.key] = true;
  player.moving = true;
});

window.addEventListener("keyup", (event) => {
  // console.log(event);
  delete keys[event.key];
  player.moving = false;
});

// let position = 0;
// const animate = () => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
//   drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
//   movePlayer();
//   handlePlayerFrame();
//   requestAnimationFrame(animate);
// }

// animate();

let fps, fpsInterval, startTime, now, then, elapsed;

const startAnimating = (fps) => {
  fpsInterval = 1000/fps;
  then = Date.now();
  startTime = then;
  animate();
}

const animate = () => {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    drawSprite(playerSprite, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    movePlayer();
    handlePlayerFrame();
  }
}
startAnimating(50);

export { animate, canvas };