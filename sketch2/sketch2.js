function setup(){
	createCanvas(720,480);
	//noStroke()
}

function draw(){
	ellipse(width/2,height/2,30);
}

function mouseClicked() {
	var click = dist(width/2,height/2,mouseX,mouseY);
		if (click < 15) {
		fill(100);
	}
}

//this could be a pulse/ripple to try out