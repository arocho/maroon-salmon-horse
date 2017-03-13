var a = 0;
var n = Math.floor((Math.random() * 8) + 1);
var d = Math.floor((Math.random() * 8) + 1);
var strokeColor = '#b9ffb1';
var bgColor = '#022d41';
var enhancer = 40;
var dimension = 80;

function setup() {
  var canvas = createCanvas(dimension, dimension);
  canvas.parent('roseCurve');
}

function draw() {

  translate((width / 2), (height / 2));
  stroke(strokeColor);
  strokeWeight(2);

  if(a < (TWO_PI * d)) {
    var r = enhancer * cos((n / d) * a);
    var x = r * cos(a);
    var y = r * sin(a);
    point(x, y);
    a += 0.09;
  }
}

function mouseClicked() {
    a = 0;
    n = Math.floor((Math.random() * 8) + 1);
    d = Math.floor((Math.random() * 8) + 1);
    background(strokeColor);
  }
