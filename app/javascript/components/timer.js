let m = 0
let s = 0
let ms = 0
let startDate = Date.now()

function setupTimer() {
  createCanvas(windowWidth, windowHeight);
}

function increment() {
  ms = Date.now() - startDate
  if (ms >= 1000) {
    startDate = Date.now()
    s++
  } else if (s >= 60) {
    s = 0
    m++
  }
}

function chrono() {
  let min
  let sec
  if (m < 10) {
    min = "0" + m
  } else {
    min = m 
  };
  if (s < 10) {
    sec = "0" + s;
  } else {
    sec = s
  };
  return min + ":" + sec + ":" + Math.min(Math.trunc(ms/10),99)
}

function timer() {
  setInterval(increment(), 1);
  fill(0);
  rect(10,20,200,50);
  fill(200, 50, 50);
  textSize(50);
  text(chrono(), 10, 65);
}

function drawTimer() {
  timer();
}

export { drawTimer, setupTimer };