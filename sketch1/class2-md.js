var  object = {
	foo: 0,
	bar: 1
}

function setup(){
	console.log(object.foo);
	createCanvas(720,480);
}

function draw() {

	noStroke();
	background(60,100,245,15);
}

function mouseClicked() {
	ellipse(mouseX,mousey,15);
}