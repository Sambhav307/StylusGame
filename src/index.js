
let canvas = document.getElementById("canvas");
canvas.addEventListener("mousemove", Updatemouse);
let ctx = canvas.getContext("2d");

ctx.clearRect(0, 0, 600, 450);

var pressure = 0;
var px = 0;
var py = 0;
var cx = 0;
var cy = 0;
var cr = 0;

var Pressure = require("pressure");

Pressure.set("#canvas", {
  change: function (force, event) {
    pressure = force;
    // px=event.;
    // py=;

    console.log(force + " " + px + " " + py);
  }
});

// ctx.fillCircle(Math.random()*)

var timer = null;
var score = 0;
var i = 0;
timer = setInterval(GameLoop, 2500);
function GameLoop(timestamp) {
  if (i > 10) {
    return;
  }
  i++;
  ctx.clearRect(0, 0, 600, 450);
  ctx.fillText("hello " + pressure, 450, 50, 150);
  ctx.beginPath();

  cx = Math.random() * 400 + 100;
  cy = Math.random() * 250 + 100;
  cr = Math.random() * 40;
  ctx.arc(cx, cy, cr, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.stroke();
}

function Updatemouse(event) {
  px = event.clientX;
  py = event.clientY;
}

// Disable extra scrolling
function preventDefault(e) {
  e.preventDefault();
}

function disableScroll() {
  document.body.addEventListener("touchmove", preventDefault, {
    passive: false
  });
}
