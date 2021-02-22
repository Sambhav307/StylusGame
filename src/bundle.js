(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

},{"pressure":2}],2:[function(require,module,exports){
// Pressure v2.2.0 | Created By Stuart Yamartino | MIT License | 2015 - 2020
!function(e,t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.Pressure=t()}(this,function(){"use strict";function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function e(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function t(s){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t=r(s);return e=n?(e=r(this).constructor,Reflect.construct(t,arguments,e)):t.apply(this,arguments),t=this,!(e=e)||"object"!==i(e)&&"function"!=typeof e?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t,s){return t&&n(e.prototype,t),s&&n(e,s),e}var h={set:function(e,t,s){y(e,t,s)},config:function(e){p.set(e)},map:function(){return v.apply(null,arguments)}},c=function(){function n(e,t,s){o(this,n),this.routeEvents(e,t,s),this.preventSelect(e,s)}return u(n,[{key:"routeEvents",value:function(e,t,s){var n=p.get("only",s);this.adapter=!b||"mouse"!==n&&null!==n?!m||"pointer"!==n&&null!==n?!g||"touch"!==n&&null!==n?new l(e,t).bindUnsupportedEvent():new d(e,t,s).bindEvents():new f(e,t,s).bindEvents():new a(e,t,s).bindEvents()}},{key:"preventSelect",value:function(e,t){p.get("preventSelect",t)&&(e.style.webkitTouchCallout="none",e.style.webkitUserSelect="none",e.style.khtmlUserSelect="none",e.style.MozUserSelect="none",e.style.msUserSelect="none",e.style.userSelect="none")}}]),n}(),l=function(){function n(e,t,s){o(this,n),this.el=e,this.block=t,this.options=s,this.pressed=!1,this.deepPressed=!1,this.nativeSupport=!1,this.runningPolyfill=!1,this.runKey=Math.random()}return u(n,[{key:"setPressed",value:function(e){this.pressed=e}},{key:"setDeepPressed",value:function(e){this.deepPressed=e}},{key:"isPressed",value:function(){return this.pressed}},{key:"isDeepPressed",value:function(){return this.deepPressed}},{key:"add",value:function(e,t){this.el.addEventListener(e,t,!1)}},{key:"runClosure",value:function(e){e in this.block&&this.block[e].apply(this.el,Array.prototype.slice.call(arguments,1))}},{key:"fail",value:function(e,t){p.get("polyfill",this.options)?this.runKey===t&&this.runPolyfill(e):this.runClosure("unsupported",e)}},{key:"bindUnsupportedEvent",value:function(){var t=this;this.add(g?"touchstart":"mousedown",function(e){return t.runClosure("unsupported",e)})}},{key:"_startPress",value:function(e){!1===this.isPressed()&&(this.runningPolyfill=!1,this.setPressed(!0),this.runClosure("start",e))}},{key:"_startDeepPress",value:function(e){this.isPressed()&&!1===this.isDeepPressed()&&(this.setDeepPressed(!0),this.runClosure("startDeepPress",e))}},{key:"_changePress",value:function(e,t){this.nativeSupport=!0,this.runClosure("change",e,t)}},{key:"_endDeepPress",value:function(){this.isPressed()&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress"))}},{key:"_endPress",value:function(){!1===this.runningPolyfill?(this.isPressed()&&(this._endDeepPress(),this.setPressed(!1),this.runClosure("end")),this.runKey=Math.random(),this.nativeSupport=!1):this.setPressed(!1)}},{key:"deepPress",value:function(e,t){.5<=e?this._startDeepPress(t):this._endDeepPress()}},{key:"runPolyfill",value:function(e){this.increment=0===p.get("polyfillSpeedUp",this.options)?1:10/p.get("polyfillSpeedUp",this.options),this.decrement=0===p.get("polyfillSpeedDown",this.options)?1:10/p.get("polyfillSpeedDown",this.options),this.setPressed(!0),this.runClosure("start",e),!1===this.runningPolyfill&&this.loopPolyfillForce(0,e)}},{key:"loopPolyfillForce",value:function(e,t){!1===this.nativeSupport&&(this.isPressed()?(this.runningPolyfill=!0,e=1<e+this.increment?1:e+this.increment,this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10)):((e=e-this.decrement<0?0:e-this.decrement)<.5&&this.isDeepPressed()&&(this.setDeepPressed(!1),this.runClosure("endDeepPress")),0===e?(this.runningPolyfill=!1,this.setPressed(!0),this._endPress()):(this.runClosure("change",e,t),this.deepPress(e,t),setTimeout(this.loopPolyfillForce.bind(this,e,t),10))))}}]),n}(),a=function(){e(i,l);var n=t(i);function i(e,t,s){return o(this,i),n.call(this,e,t,s)}return u(i,[{key:"bindEvents",value:function(){this.add("webkitmouseforcewillbegin",this._startPress.bind(this)),this.add("mousedown",this.support.bind(this)),this.add("webkitmouseforcechanged",this.change.bind(this)),this.add("webkitmouseforcedown",this._startDeepPress.bind(this)),this.add("webkitmouseforceup",this._endDeepPress.bind(this)),this.add("mouseleave",this._endPress.bind(this)),this.add("mouseup",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&this.fail(e,this.runKey)}},{key:"change",value:function(e){this.isPressed()&&0<e.webkitForce&&this._changePress(this.normalizeForce(e.webkitForce),e)}},{key:"normalizeForce",value:function(e){return this.reachOne(v(e,1,3,0,1))}},{key:"reachOne",value:function(e){return.995<e?1:e}}]),i}(),d=function(){e(i,l);var n=t(i);function i(e,t,s){return o(this,i),n.call(this,e,t,s)}return u(i,[{key:"bindEvents",value:function(){k?(this.add("touchforcechange",this.start.bind(this)),this.add("touchstart",this.support.bind(this,0))):this.add("touchstart",this.startLegacy.bind(this)),this.add("touchend",this._endPress.bind(this))}},{key:"start",value:function(e){0<e.touches.length&&(this._startPress(e),this.touch=this.selectTouch(e),this.touch&&this._changePress(this.touch.force,e))}},{key:"support",value:function(e,t,s){s=2<arguments.length&&void 0!==s?s:this.runKey;!1===this.isPressed()&&(e<=6?(e++,setTimeout(this.support.bind(this,e,t,s),10)):this.fail(t,s))}},{key:"startLegacy",value:function(e){this.initialForce=e.touches[0].force,this.supportLegacy(0,e,this.runKey,this.initialForce)}},{key:"supportLegacy",value:function(e,t,s,n){n!==this.initialForce?(this._startPress(t),this.loopForce(t)):e<=6?(e++,setTimeout(this.supportLegacy.bind(this,e,t,s,n),10)):this.fail(t,s)}},{key:"loopForce",value:function(e){this.isPressed()&&(this.touch=this.selectTouch(e),setTimeout(this.loopForce.bind(this,e),10),this._changePress(this.touch.force,e))}},{key:"selectTouch",value:function(e){if(1===e.touches.length)return this.returnTouch(e.touches[0],e);for(var t=0;t<e.touches.length;t++)if(e.touches[t].target===this.el||this.el.contains(e.touches[t].target))return this.returnTouch(e.touches[t],e)}},{key:"returnTouch",value:function(e,t){return this.deepPress(e.force,t),e}}]),i}(),f=function(){e(i,l);var n=t(i);function i(e,t,s){return o(this,i),n.call(this,e,t,s)}return u(i,[{key:"bindEvents",value:function(){this.add("pointerdown",this.support.bind(this)),this.add("pointermove",this.change.bind(this)),this.add("pointerup",this._endPress.bind(this)),this.add("pointerleave",this._endPress.bind(this))}},{key:"support",value:function(e){!1===this.isPressed()&&(0===e.pressure||.5===e.pressure||1<e.pressure?this.fail(e,this.runKey):(this._startPress(e),this._changePress(e.pressure,e)))}},{key:"change",value:function(e){this.isPressed()&&0<e.pressure&&.5!==e.pressure&&(this._changePress(e.pressure,e),this.deepPress(e.pressure,e))}}]),i}(),p={polyfill:!0,polyfillSpeedUp:1e3,polyfillSpeedDown:0,preventSelect:!0,only:null,get:function(e,t){return(t.hasOwnProperty(e)?t:this)[e]},set:function(e){for(var t in e)e.hasOwnProperty(t)&&this.hasOwnProperty(t)&&"get"!=t&&"set"!=t&&(this[t]=e[t])}},y=function(e,t,s){var n=2<arguments.length&&void 0!==s?s:{};if("string"==typeof e||e instanceof String)for(var i=document.querySelectorAll(e),r=0;r<i.length;r++)new c(i[r],t,n);else if(P(e))new c(e,t,n);else for(r=0;r<e.length;r++)new c(e[r],t,n)},P=function(e){return"object"===("undefined"==typeof HTMLElement?"undefined":i(HTMLElement))?e instanceof HTMLElement:e&&"object"===i(e)&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},v=function(e,t,s,n,i){return(e-t)*(i-n)/(s-t)+n},b=!1,g=!1,m=!1,w=!1,k=!1;if("undefined"!=typeof window){if("undefined"!=typeof Touch)try{(Touch.prototype.hasOwnProperty("force")||"force"in new Touch)&&(w=!0)}catch(e){}g="ontouchstart"in window.document&&w,b="onmousemove"in window.document&&"onwebkitmouseforcechanged"in window.document&&!g,m="onpointermove"in window.document,k="ontouchforcechange"in window.document}return h});
},{}]},{},[1]);
