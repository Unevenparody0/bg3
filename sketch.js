var bg,bgi,ghost,ghostst,ghostju,door,doori,cl,cli,sound;
var doorg,clg,invisg;

function setup(){
  createCanvas(600,600);
  bg = createSprite(300,300);
  bg.addImage(bgi);
  bg.velocityY=3;
  
  
  ghost = createSprite(300,50);
   ghost.addAnimation("ghost-jumping",ghostju);
  ghost.addAnimation("ghost-standing",ghostst);
 
  ghost.scale=0.35;
  invisg = new Group();
  clg = new Group();
  doorg = new Group();
  
  
  
}

function preload(){
  
  doori = loadImage("door.png");
  bgi = loadImage("tower.png");
  cli = loadImage("climber.png");
  ghostst = loadAnimation("ghost-jumping.png");
   ghostju = loadAnimation("ghost-standing.png");
  
}
  
 function draw(){
   background  (100);
   
   if(bg.y>600){
      bg.y = 300;
      
      }
   
   ghost.velocityY=ghost.velocityY+0.5;
   
   spawnElements();
   
   if(keyDown("space")){
      ghost.velocityY=-7; 
      
      
      }
   
   if(keyDown("right")){
     
     ghost.x=ghost.x+5;
     
     
   }
   
     if(keyDown("left")){
     
     ghost.x=ghost.x-5;}
   
   if(ghost.isTouching(invisg)||ghost.y>600){   
      
   clg.destroyEach();  
     doorg.destroyEach();
     invisg.destroyEach();
     
     ghost.destroy();
     bg.destroy();  
      
      
      }
   
   if(ghost.isTouching(clg)&&ghost.isTouching(doorg)){
     ghost.velocityY=0;
     
     
   } 
   
   drawSprites();
   
   
 } 

function spawnElements(){
  
  if (frameCount % 200 === 0 ){
 door = createSprite (random(80,520),-200) 
    door.velocityY = 3;
  door.lifetime = 800/3; 
    door . addImage(doori);
    door.scale = 0.8;
     
    cl = createSprite(50,-140);
    cl.x = door.x;
    cl . addImage(cli);
    cl.velocityY = door.velocityY;
    cl.lifetime = 800/3;
    
    invis = createSprite(70,-135,30,10)
    invis.x = cl.x;
    invis.visible=false;
  
    invis.width = cl.width;
  
    invis.velocityY = 3;
    invis.lifetime= 800/3;
    
  clg . add(cl);
    doorg. add(door);
    invisg. add(invis);
    
    invis.debug=true;
    
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
  
  }
  
  
}


