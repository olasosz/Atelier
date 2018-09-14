//adapted from https://p5js.org/reference/#/p5/loadImage

var img;

function preload() {
  img = loadImage('clicker.png');
}

function setup() {
	createCanvas(720,480);
	nostroke();
	image(img,random(width),random(height));

}

function draw() {
	background(250);
}

function mouseClicked() {

var click = dist(img.x,img.y,mouseX,mouseY);
		if (click < img.r) {
			image(img,random(width),random(height));
		}
	}
