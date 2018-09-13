var mouseClicks = [];

function setup(){
	createCanvas(720,480);
	var button = createButton('add particle');
	button.mousePressed(addParticle);
	noStroke();
}

function draw() {
	 background(60,100,245,15);

	for (var i = 0; i < mouseClicks.length; i++) {
		fill(mouseClicks[i].color);
		ellipse(mouseClicks[i].x,mouseClicks[i].y,10);
		mouseClicks[i].x=mouseClicks[i].x+mouseClicks[i].xspeed;
		mouseClicks[i].y=mouseClicks[i].y+mouseClicks[i].yspeed;
	}
}

function addParticle() {
	var clickposition ={
		x:random(width),
		y:random(height),
		xspeed:random(-5,5),
		yspeed:random(-5,5),
		color: color(random(100,150), random(255),random(255))
	}
	mouseClicks.push(clickposition);
}