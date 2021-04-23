  var PLAY = 1;
  var END = 0;
  var gameState = PLAY;

  var rocket,earth;
  var rocketImg,earthImg;
  var bgImg;
  var background;
  var asteroid1Img,asteroid2Img,asteroid3Img,asteroid4Img,asteroid5Img;
  var bulletImg,bulletsGroup
  var aster1,aster2,aster3,aster4,aster5;

  
  function preload(){
  rocketImg=loadImage("rocket.png");
  bgImg=loadImage("bg.jpg");
  bulletImg=loadImage("bullet.png");
  asteroid1Img=loadImage("asteroid1.png");
  asteroid2Img=loadImage("asteroid2.png");
  asteroid3Img=loadImage("asteroid3.png");
  asteroid4Img=loadImage("asteroid4.png");
  asteroid5Img=loadImage("asteroid5.png");
  earthImg=loadImage("earth.png");
  }


  function setup() {
  createCanvas(600, 600);
   
  background = createSprite(300,250,500,600);
  background.addImage(bgImg);
  background.scale = 1.8
   
  earth = createSprite(290,495,10,110) ;
  earth.addImage(earthImg);
  earth.scale=1.3
   
  rocket = createSprite(290,450,10,10);
  rocket.addImage(rocketImg);
  rocket.scale=0.8;
  
  bulletGroup = createGroup();
  aster1 = createGroup();
  aster2 = createGroup();
  aster3 = createGroup();
  aster4 = createGroup();
  aster5 = createGroup();
   
  score=0;
  }


  function draw() {
  
  if(gameState===PLAY){
  background.velocityY = -4
    

  if (background.y <150){
  background.y = background.width/2;
  }
    
    
  if(keyDown(LEFT_ARROW)){
  rocket.x = rocket.x -15;
  }
    
  
  else if(keyDown(RIGHT_ARROW)){
  rocket.x = rocket.x +15;
  }
    
  
  // release arrow when space key is pressed
  if (keyDown("B")) {
  Bullet();
  }
  
    
  if(bulletGroup.isTouching(aster1)){
  aster1.destroyEach();
  bulletGroup.destroyEach();
  score=score+1;
  }
    
    
  if(bulletGroup.isTouching(aster2)){
  aster2.destroyEach();
  bulletGroup.destroyEach();
  score=score+2;
  }  
    
   
  if(bulletGroup.isTouching(aster3)){
  aster3.destroyEach();
  bulletGroup.destroyEach();
  score=score+3;
  }  
    
   
  if(bulletGroup.isTouching(aster4)){
  aster4.destroyEach();
  bulletGroup.destroyEach();
  score=score+4;
  }  
    
   
  if(bulletGroup.isTouching(aster5)){
  aster5.destroyEach();
  bulletGroup.destroyEach();
  score=score+5;
  }  
    
  var select_asteroid = Math.round(random(1,6)); 
    
  if (World.frameCount % 20 == 0) {
    if (select_asteroid == 1) {
      asteroid1();
    } else if (select_asteroid == 2) {
      asteroid2();
    } else if (select_asteroid == 3) {
      asteroid3();
    } else if (select_asteroid == 4){
      asteroid4();
    } else if (select_asteroid == 5){
      asteroid5();       
    }
  }  
  
  if(earth.isTouching(aster1)||earth.isTouching(aster2)||earth.isTouching(aster3)||earth.isTouching(aster4)||earth.isTouching(aster5)){
  gameState=END;
  } 
  } 
    
    
  //creating End State 
  else if(gameState===END) {
     
  fill("white")
  textSize(30)
  text("gameOver",200,300);
    
  //giving bakground and rocket '0' velocity
  background.velocityY = 0;
  rocket.velocityX = 0;
    
  //giving lifetime so that they will not disappear  
  aster1Group.setLifetimeEach(-1);  
  aster2Group.setLifetimeEach(-1);  
  aster3Group.setLifetimeEach(-1);  
  aster4Group.setLifetimeEach(-1);  
  aster5Group.setLifetimeEach(-1);  
    
  //setting velocity to '0'
  aster1Group.setVelocityYEach(0);
  aster2Group.setVelocityYEach(0);
  aster3Group.setVelocityYEach(0);
  aster4Group.setVelocityYEach(0);
  aster5Group.setVelocityYEach(0);
  }
    
    
  //drawing sprites
  drawSprites(); 
    
  //display score
  textSize(25)
  fill("white")
  text("Score: "+ score,470,50);
  }


  function asteroid1(){
  var redA = createSprite(Math.round(random(100,100)),0,10,10);
  redA.addImage(asteroid1Img);
  redA.velocityY = 6;
  redA.scale = 0.2;
  aster1.add(redA);  
  }


  function asteroid2(){
  var blueA = createSprite(Math.round(random(250,100)),0,10,10);
  blueA.addImage(asteroid2Img);
  blueA.velocityY = 6;
  blueA.scale = 0.2;
  aster2.add(blueA);  
  }


  function asteroid3(){
  var blackA = createSprite(Math.round(random(350,100)),0,10,10);
  blackA.addImage(asteroid3Img);
  blackA.velocityY = 6;
  blackA.scale = 0.2;
  aster3.add(blackA);  
  }


  function asteroid4(){
  var orangeA = createSprite(Math.round(random(500,100)),0,10,10);
  orangeA.addImage(asteroid4Img);
  orangeA.velocityY = 6;
  orangeA.scale = 0.2;
  aster4.add(orangeA);  
  }


  function asteroid5(){
  var pinkA = createSprite(Math.round(random(600,100)),0,10,10);
  pinkA.addImage(asteroid5Img);
  pinkA.velocityY = 6;
  pinkA.scale = 0.2;
  aster5.add(pinkA);  
  }


  function Bullet() {
  var bullet= createSprite(100, 100, 10, 10);
  bullet.addImage(bulletImg);
  bullet.y = 390;
  bullet.x = rocket.x;
  bullet.velocityY = -5;
  bullet.lifetime = 100;
  bullet.scale = 0.05;
  bulletGroup.add(bullet);
  }




