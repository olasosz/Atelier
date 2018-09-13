function setup(){
	createCanvas(720,480);
}

function draw() {
	for (var i = 0; i < 10; i++) {
		ellipse(random(width),random(height),10,10);
	}
}