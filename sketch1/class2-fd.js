function setup(){
	createCanvas(720,480);
}

function draw() {
	noStroke();
	background(random(255),random(100),random(150),15);
	for (var i = 0; i < 10; i++) {
		ellipse(random(width),random(height),10,10);
	}
}

function mouseClicked() {
	// body...
}