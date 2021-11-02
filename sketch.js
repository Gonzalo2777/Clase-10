var Trex, trex_running; 
var suelo, ground;


function preload(){
trex_running = loadAnimation("trex1.png","trex3.png", "trex4.png");
ground = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crear sprite del t-rex.
 Trex = createSprite(50,160,20,50);
Trex.addAnimation("running",trex_running);
Trex.scale=0.5;
suelo = createSprite(200,180, 400, 20); 
suelo.addImage(ground);
}

function draw(){
  background("white");
if (keyDown("space")){
  Trex.velocityY=-3;
}
Trex.velocityY=Trex.velocityY+0.5; 
Trex.collide(suelo);
drawSprites();
}
