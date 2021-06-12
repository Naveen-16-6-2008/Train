var train,trainimg,trainsound;
var track,trackimg;
var invisibleGround;
var bg,bgimg;
var distance = 0;
var database;
function preload(){
    trainimg = loadImage("train.png");
    trackimg = loadImage("track.png");
    trainsound = loadSound("metro.mp3");
    bgimg = loadImage("bg.jpg");
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();

    train = createSprite(470,250,100,100);
    train.addImage(trainimg);
    train.scale = 1;

  

bg = createSprite(500,200,100,100);
bg.addImage(bgimg);
bg.x = bg.width/1.5;
bg.scale = 2;
   
invisibleGround = createSprite(750,850,500,10);
invisibleGround.x = invisibleGround.width/3;
  invisibleGround.velocityX = -(100);
invisibleGround.visible = false;
}

function draw(){
    background(225);
    bg.display();

   textSize(30);
   fill("red");
   text("Train Game",700,50);
   textSize(25);
  text("Press Space to get the train down",570,100); 
  text("Press right arrow to move the train and B to stop the train",440,150)
  
  


if (invisibleGround.x < 0){
  invisibleGround.x = invisibleGround.width/2;
}


if(keyIsDown(32)){

    train.velocityY = 5;

  }

 
  if(train.isTouching(invisibleGround)){
    train.velocityY = 0;
  }
  
  bg.velocityX = 0;

  if (keyIsDown(RIGHT_ARROW)){
    bg.velocityX = -(50)
    if (bg.x < 0){
      bg.x = bg.width;
    }
    trainsound.play();
    train.distance+=50;
    train.update;
  }
  
  
  
    if(train.distance>1000){
      text("Game Over",450,500);
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        distance:this.distance
      });
    }
if(keyIsDown(LEFT_ARROW)){
    }
if(keyIsDown(DOWN_ARROW)){
}

if(keyIsDown(UP_ARROW)){
}

if(train.distance>4500){
text("Game Over",470,500);
}
if(keyIsDown(66)){
  bg.velocityX = 0;
}




camera.position.x = train.x+250;
train.collide(invisibleGround);

train.display();
    drawSprites;
}


