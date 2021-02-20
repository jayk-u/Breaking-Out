function setupControls() {
  createCanvas(windowWidth, windowHeight)
}

let upKey = "z";
let downKey = "s";
let leftKey = "q";
let rightKey = "d";
let interactKey = "e";
let key

function drawControls() {
  noStroke();
  fill(100, 100, 200);
  rect(windowWidth / 3, 20, windowWidth / 3, windowHeight - 40);
  for (let i = 30; i < 180; i += 30) {
    if (i == 30) {key = "Up"}
    if (i == 60) {key = "Down"}
    if (i == 90) {key = "Left"}
    if (i == 120) {key = "Right"}
    if (i == 150) {key = "Interact"}
    fill(240);
    textSize(15);
    text(key + " key:", (width / 3) + 20, 25 + i)
    text(controls[key], 2*width/3 - 30, i + 25)
    fill(0)
    rect((2*width)/3 - 30, i + 15, 30, 30)


  }
}

const controls =  {
  Up:upKey,
  Down:downKey,
  Left:leftKey,
  Right:rightKey,
  Interact:interactKey, 
}

export { controls, drawControls, setupControls };