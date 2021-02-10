var balloon

function preload(){
  backgroundImg=loadImage("image/background.png")
  balloon=loadAnimation("image/Balloon1.png","image/Balloon2.png","image/Balloon3.png")
}


function setup() {
  createCanvas(500,500);
  balloon1.createSprite(200,200,10,10)
  balloon1.addAnimation("balloons",balloon)
  
}


function draw(backgroundImg) {
  background(255,255,255); 
  balloon1.display(); 
  drawSprites();
}