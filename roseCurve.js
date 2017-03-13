var a = 0;
var index = 0;
var i = 0;
//Four n/d values for specific rose curves
var n = new Array(2, 2, 3, 1);
var d = new Array(7, 3, 2, 6);
var strokeColor = '#b9ffb1';
var bgColor = '#022d41';
var enhancer = 40;
var dimension = 80;
var rateOfChange = 0.09;

function setup() {
  var canvas = createCanvas(dimension, dimension);
  canvas.parent('roseCurve');
}

function draw() {
  translate((width / 2), (height / 2));
  stroke(strokeColor);
  strokeWeight(2);

  if(a < (TWO_PI * d[i])) {
    var r = enhancer * cos((n[i] / d[i]) * a);
    var x = r * cos(a);
    var y = r * sin(a);
    point(x, y);
    a += rateOfChange;
  }
}

function mouseClicked() {
    a = 0;
    background(bgColor);
    i++;
    if (i == n.length) {
      i = 0;
    }
  }
