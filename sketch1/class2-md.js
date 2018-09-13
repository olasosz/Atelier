var mouseClicks = [];

function setup(){
	createCanvas(720,480);
}

function draw() {
	noStroke();
	background(60,100,245,15);

	for (var i = 0; i < mouseClicks.length; i++) {
		ellipse(mouseClicks[i].x,mouseClicks[i].y,10);
		mouseClicks[i].x=mouseClicks[i].x+mouseClicks[i].speed;
		mouseClicks[i].y=mouseClicks[i].y+mouseClicks[i].speed;
	}
}

function mouseClicked() {
	var clickposition ={
		x:mouseX,
		y:mouseY,
		speed:random(-5,5)
	}
	mouseClicks.push(clickposition);
}