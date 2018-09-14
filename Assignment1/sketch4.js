function setup(){
	createCanvas(720,480);
	var button = createButton('Stop!');
	//button.mousePressed(confetti);
}

function draw() {
	noStroke();
	if (mouseIsPressed) {
	}else{
	background(random(255),random(150),random(200),15);
	for (var i = 0; i < 10; i++) {
		ellipse(random(width),random(height),10,10);
	}
}
}

// function confetti() {
// 	if (mouseIsPressed) {
// 	}else{
// 	background(random(255),random(100),random(150),15);
// 	for (var i = 0; i < 10; i++) {
// 		ellipse(random(width),random(height),10,10);
// 	}
// }
//}