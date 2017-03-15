//Four numerator/denomenator values for specific rose curves
var n = new Array(2, 2, 3, 1);
var d = new Array(7, 3, 2, 6);

//Rose curve parameters
var theta = 0;
var index = 0;
var enhancer = 40;
var rateOfChange = 0.09;

//Canvas values
var dimension = 80;
var strokeColor = '#b9ffb1';
var bgColor = '#022d41';

function setup() {
  var canvas = createCanvas(dimension, dimension);
  canvas.parent('roseCurve');
}

function draw() {
  translate((width / 2), (height / 2));
  stroke(strokeColor);
  strokeWeight(2);

  //Rose curve formula
  if(theta < (TWO_PI * d[index])) {
    var radius = enhancer * cos((n[index] / d[index]) * theta);
    var x = radius * cos(theta);
    var y = radius * sin(theta);
    point(x, y);
    theta += rateOfChange;
  }
}

function mouseClicked() {
    theta = 0;
    background(bgColor);
    index++;
    if (index == n.length) {
      index = 0;
    }
  }
