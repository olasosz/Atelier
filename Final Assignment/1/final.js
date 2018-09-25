var player;

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
  
  player = {
    x : width/2,
    y : 350,
    xs : 2
  }
}

function draw() {
  background(220);

for ( var i = 0; i < 5; i++){
  rect(player.x,player.y, 40,40);
}
  
function keyPressed(){
  if(key === 'd'){
    player.x = player.x + player.xs;
    
    if (player.x>width) {
    player.x = width;
    }
  if(key === 'a'){
    player.x = player.x + player.xs;
    if (player.x<0){
      player.x = 0;
    }
    }
  }
}
  
}

function 