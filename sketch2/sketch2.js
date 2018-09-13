var sound;
var bubble;

function setup(){
	createCanvas(720,480);
	//noStroke()
	sound = createAudio('artisdead.mp3');
	bubble = {
		x : width/2,
		y : height/2,
		r : 15,
		xs : 2,
		ys : 2
	}
}

function draw(){
	ellipse(bubble.x,bubble.y,bubble.r*2);
	bubble.x = bubble.x + bubble.xs;
	bubble.y = bubble.y + bubble.ys;
	if (bubble.x>width || bubble.x<0) {
		bubble.xs = -bubble.xs;
	}
	if (bubble.y>height || bubble.y<0) {
		bubble.ys = -bubble.ys;
	}
}

function mouseClicked() {
	var click = dist(bubble.x,bubble.y,mouseX,mouseY);
		if (click < bubble.r) {
		fill(100);
		sound.play();
	}
}

//this could be a pulse/ripple to try out