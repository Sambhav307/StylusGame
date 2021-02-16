import "./styles.css";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.clearCanvas;
ctx.clearRect(0, 0, 600, 450);

var Pressure = require("pressure");
Pressure.set("#canvas", {
  change: function (force, event) {
    console.log(force);
  }
});

// ctx.fillCircle(Math.random()*)
// ctx.fillText( pressure.toString(), 550, 50, 50);

var timer = null;
timer = setInterval(GameLoop, 1000 / 25);
function GameLoop(timestamp) {
  ctx.clearRect(0, 0, 600, 450);
}
