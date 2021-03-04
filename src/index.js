let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
var height = 330;
var width = 600;
ctx.clearRect(0, 0, width, height);
canvas.width = width;
canvas.height = height;
var radius = 40;
var pressure = 0;
var px = 0;
var py = 0;
var pr = 0;

var cx = 0;
var cy = 0;
var cr = 0;
var gameEnd = false;
var score = 0;

var Pressure = require("pressure");

Pressure.set("#canvas", {
  change: function (force, event) {
    pressure = force;
    pressure = pressure.toFixed(3);
    px = event.clientX;
    px = px.toFixed(0);
    py = event.clientY;
    py = py.toFixed(0);
    pr = pressure * radius;
    pr = pr.toFixed(1);
  }
});

function check() {
  var distt = dist();

  // console.log(distt + " " + pr + " " + cr);

  if (distt + pr > cr) {
    gameEnd = true;
  }
}
function dist() {
  return Math.sqrt(((px - cx) ^ 2) + ((py - cy) ^ 2));
}

// ctx.fillCircle(Math.random()*)

var timer = null;
var timer1 = null;

var score = 0;
var i = 0;
timer = setInterval(circlespawn, 1500);
timer1 = setInterval(Game, 35);
// timer = setInterval(pressureupdate, 50);

// function pressureupdate(timestamp) {
//   px = pxlive;
//   py = pylive;
//   pr = prlive;
// }

function Game(timestamp) {
  // console.log(
  //   pressure +
  //     " " +
  //     px +
  //     " " +
  //     py +
  //     " " +
  //     pr +
  //     " circle" +
  //     cx +
  //     " " +
  //     cy +
  //     " " +
  //     cr
  // );
  check();
  // console.log(gameEnd);

  if (gameEnd) {
    clearInterval(timer1);
  }
  //pressure reset
  if (pressure == 0) {
    px = cx;
    py = cy;
    pr = 0;
  }

  //clear canvas
  ctx.clearRect(0, 0, width, height);

  //output
  ctx.fillText("hello " + px + " " + py, width - 80, 10, 80);
  // console.log(px + " " + py);
  ctx.fillText("hello " + pressure + " " + score, width - 80, 20, 80);

  //random circle spawn
  ctx.beginPath();
  ctx.fillStyle = "Black";
  ctx.arc(cx, cy, cr, 0, 2 * Math.PI, true);
  ctx.fill();

  //pressure
  ctx.beginPath();
  ctx.arc(px, py, pr, 0, 2 * Math.PI, false);
  ctx.fillStyle = "blue";
  ctx.fill();

  pressure = 0;

  // px = cx;
  // py = cy;
  // pr = ;
}

function circlespawn(timestamp) {
  cx = Math.random() * (width - 200) + 100;
  cy = Math.random() * (height - 200) + 100;
  cr = Math.random() * radius + 5;
  score++;
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
