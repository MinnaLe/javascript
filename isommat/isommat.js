var list_of_balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	
		for (i = 0; i < 100; i++) {
		list_of_balls.push(new Ball());
}
	loop();

}

function draw() {

	for (ball of list_of_balls) {
		ball.show();
		ball.newpos();
		
	}
	
}

class Ball {
	
	constructor() {
		this.x = 500;
		this.y = 300;
		this.x_speed = random()*5 - 2.5;
		this.y_speed = random()*5;
		this.gravity = 0.01;
	}
	
	show() {
		circle(this.x, this.y, 10);
	}
	
	newpos() {
		this.x += this.x_speed;
		this.y -= this.y_speed;
		this.y_speed -= this.gravity;
	}

}