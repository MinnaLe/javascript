function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function draw() {
 
	var r = random(0,255);
	var g = random(0,255);
	var b = random(0,255);

	fill(r,g,b);
  stroke(0);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  stroke(speed);
  ellipse(x, y, speed, speed);
}