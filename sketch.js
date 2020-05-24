
function preload(){
  groundImage= loadImage("ground.jpg");
  playerImage= loadImage("player.png");
}
function setup() {
canvas= createCanvas(displayWidth-30,displayHeight-70);
  //ground= createSprite(displayWidth/2,displayHeight/2,displayWidth*3,displayHeight*4);
 // ground.addImage("ground",groundImage);
 // ground.scale=4;
  player= createSprite(displayWidth/6,displayHeight/2);
  player.addImage("player",playerImage);
  invisibleground =createSprite(displayWidth/2,displayHeight-130,displayWidth,50);
  invisibleground.visible=false;
  upButton= createButton('↑');
  downButton= createButton(' ↓ ');
  upButton.position(50,displayHeight/2+100);
  downButton.position(50,displayHeight/2+170);
}

function draw() {
  background(groundImage);
  //if(keyIsDown(UP_ARROW)){
   // player.velocityY=-12;
  //}
  upButton.mousePressed(()=>{
    player.velocityY=-15
  })
  downButton.mousePressed(()=>{
    
  })
  player.velocityY+=1;
  console.log(player.velocityY);
  player.collide(invisibleground);

  drawSprites();
}

