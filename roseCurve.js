var a = 0;
var n = Math.floor((Math.random() * 8) + 1);
var d = Math.floor((Math.random() * 8) + 1);

function setup() {
  var canvas = createCanvas(80,80);
  canvas.parent('roseCurve');
}

function draw() {

  translate((width / 2), (height / 2));
  stroke(128,101,109);
  strokeWeight(2);

  if(a < (TWO_PI * d)) {
    var r = 40 * cos((n / d) * a);
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
    background('#f4e8d8');
  }
