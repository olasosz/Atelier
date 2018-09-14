var mouseClicks = [];
var bubble;

function setup(){
	createCanvas(720,480);
	noStroke();
	bubble = {
		x : width/2,
		y : height/2,
		r : 15,
		xs : 2,
		ys : 2
	}
}

function draw(){
	background(40,10,51,15);
	fill(200);
		ellipse(bubble.x,bubble.y,bubble.r*2);
}

function mouseClicked() {
	var click = dist(bubble.x,bubble.y,mouseX,mouseY);
	for (var i = 0; i < dot.length; i++) {
		if (click < bubble.r) {
			fill(mouseClicks[i].color);
			ellipse(mouseClicks[i].x,mouseClicks[i].y,10);

		}
	}

}

function dot() {
	var clickposition ={
		x:random(width),
		y:random(height),
		xspeed:random(-5,5),
		yspeed:random(-5,5),
		color: color(random(100,200), random(100,255),random(100,255))
	}
		mouseClicks.push(dot);
}

//this could be a pulse/ripple to try out