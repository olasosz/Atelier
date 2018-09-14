var mouseClicks = [];

function setup(){
	createCanvas(720,480);
	var button = createButton('add particle');
	button.mousePressed(addParticle);
	noStroke();
}

function draw() {
	 background(40);

	for (var i = 0; i < mouseClicks.length; i++) {
		fill(mouseClicks[i].color);
		ellipse(mouseClicks[i].x,mouseClicks[i].y,10);
		mouseClicks[i].x=mouseClicks[i].x+mouseClicks[i].xspeed;
		mouseClicks[i].y=mouseClicks[i].y+mouseClicks[i].yspeed;
	if (mouseClicks[i].x>width || mouseClicks[i].x<0) {
		mouseClicks[i].xspeed = -mouseClicks[i].xspeed;
	}
	if (mouseClicks[i].y>height || mouseClicks[i].y<0) {
		mouseClicks[i].yspeed = -mouseClicks[i].yspeed;
	}
}
}

function addParticle() {
	var clickposition ={
		x:random(width),
		y:random(height),
		xspeed:random(-5,5),
		yspeed:random(-5,5),
		color: color(random(100,200), random(100,255),random(100,255))
	}
	mouseClicks.push(clickposition);
}