var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop();  // Run once and stop
}

function draw() {
  background(237, 55, 55);
  pieChart(300, angles);
   fill(255,255,0); //white, 200 level of transparency (min = 0, max = 255)
  noStroke();
  textSize(30);
  textAlign(LEFT);
  textFont("Serif");
 // yellow, t refers to the transparency (set to fully opaque (255) at the beginning (see variable a the top of the sketch))
  text("Pie Chart",width-200, height-200);
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var red = map(i, 0, data.length, 0, 255);
    fill(red);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
  //firefly
  fill(255,255,127,200); //white, semi-transparent
  ellipse(mouseX+5,mouseY+50,10,10); // follows the mouse, 10px dia
  //sparkly sky (points are redrawn randomly on the canvas everytime we go through the draw function
  stroke(255);
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
}