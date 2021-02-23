function setupControls() {
  createCanvas(windowWidth, windowHeight)
}

let upKey = "z";
let downKey = "s";
let leftKey = "q";
let rightKey = "d";
let interactKey = "e";

function defineControls() {
  const controldefiners = document.querySelectorAll(".controlKeys")
  controldefiners.forEach(definer => {
    definer.addEventListener("click", () => {
      definer.innerHTML = "Define new key..."
      document.addEventListener("keyup", (e) => {
        if (e.key == "Escape") {
          definer.innerHTML = controls[definer.previousElementSibling.innerHTML]
        } else {
          definer.innerHTML = e.key
          controls[definer.previousElementSibling.innerHTML] = e.key
        }
      }, 
      {once: true});
    })
  })
}

let controls =  {
  Upkey:upKey,
  Downkey:downKey,
  Leftkey:leftKey,
  Rightkey:rightKey,
  Interactkey:interactKey,
}

// Obsolete -- abandonned cuz too ugly
// function drawControls() {
//   noStroke();
//   fill(100, 100, 200);
//   rect(windowWidth / 3, 20, windowWidth / 3, windowHeight - 40);
//   for (let i = 30; i < 180; i += 30) {
//     if (i == 30) {key = "Up"}
//     if (i == 60) {key = "Down"}
//     if (i == 90) {key = "Left"}
//     if (i == 120) {key = "Right"}
//     if (i == 150) {key = "Interact"}
//     fill(240);
//     textSize(15);
//     text(key + " key:", (windowWidth / 3) + 20, 25 + i)
//     fill(200,30,30)
//     text(controls[key], 2*windowWidth/3 - 30, i + 25)
//   }
// }

export { controls, defineControls, setupControls };