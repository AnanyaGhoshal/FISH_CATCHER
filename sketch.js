const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bullet = []; 
var gfish = [];
var shark = [];
var boat, string, bgImg, rod, string1, string3, hook, rod1, gun1, fishImg;
var rodB, gunB, gunB1, rodB1, pos;
var score;
var fish;
var visiblity = 255;
var gameState ="play";

function preload(){

    bgImg = loadImage("bg.gif");
    fishImg = loadImage("goldfish.png");
    gun1 = loadImage("gun.png");
    rod1 = loadImage("rod.png");

}

function setup(){
  
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    
   // hook = Bodies.rectangle(490,500,10,10,{isStatic:true});
   // World.add(world,hook);
    
    boat = new Boat(150,350,500,10);
    bullet.push(new Bullet(440,230));
    gfish.push(new Seaf(1200, 500));
    rod = new Fishrod(400,330,200,100,boat.angle);
    string = new Slingshot(boat.body,{x:0,y:0},{x:150,y:350});
    //string1 = new Slingshot(hook.body,{x:0,y:30},{x:450,y:480});
    shark.push(new Shark(1200 , 500));
   // gunB1 = createSprite(1135,110,70,20);
   // rodB1 = createSprite(1135,80,70,20);
    rodB = createButton('Rod');
    gunB = createButton('Gun');

    score = 0;
    fish = 0;

    rodB.position(1125,70);
    gunB.position(1125,100);

    //pos = rod.body.position;

    
}

function draw(){

    background(bgImg);

    Engine.update(engine);

    /*if(mousePressedOver(gunB1)){
        displayImage();
    }*/

    //rect(hook.position.x,hook.position.y,10,10);

    //rod.body.position.x = boat.body.position.x+240;
    //rod.body.position.y = boat.body.position.y-20;

    if(boat.body.position.y>550){
        gameState = "end";
    }

    if(gameState==="end"){
        gfish = [];
        shark = [];
        bullet = [];
        fill("red");
        strokeWeight(2);
        stroke(0);
        textSize(30);
        text("GAME OVER !!!",500,300);
    }

    

    spawnFish();
    //showBullet();

    boat.display();
    rod.display();

    fill(0);
    textSize(20);
    text("Score: "+score,1080,50);
    text("Fish: "+fish,10,50);
    text("Press Left_Arrow to shoot..",550,40);
   // drawSprites();

    
} 


function spawnFish(){

    if(gfish.length>0){
        gfish.push(new Seaf(1210,random(420,600)));
    }

    for(var i =0; i<gfish.length;i=i+20){
        Matter.Body.setVelocity(gfish[i].body,{x:-5,y:0});
        gfish[i].display();
        
        var collision = Matter.SAT.collides(rod.body,gfish[i].body);

        if(collision.collided){
            score = score +5;
            fish = fish+1;
            Matter.World.remove(world,gfish[gfish.length-1].body);
           
        }
    }


  if(shark.length>0){
      shark.push(new Shark(1200, random(480,500)));
  }
  
  for(var i = 0; i<shark.length; i=i+200){
      Matter.Body.setVelocity(shark[i].body,{x:-5,y:0});
      shark[i].display();

      var collision = Matter.SAT.collides(boat.body,shark[i].body);

      if(collision.collided){
          string.fly();
      }
  }

  if(gameState!=="end"){
    
    //if(keyIsDown(LEFT_ARROW) && bullet.length>0){
        if(bullet.length>0){
            bullet.push(new Bullet(240,170));
        }

        if(keyIsDown(LEFT_ARROW)){
        for(var i=0; i<bullet.length; i++){
          //  bullet[bullet.length-1].shoot();
          Matter.Body.setVelocity(bullet[i].body,{x:3,y:0});
          Matter.Body.setStatic(bullet[i].body,false);
          bullet[i].display();

          var collision = Matter.SAT.collides(bullet[i].body,shark[i].body);

          if(collision.collided){
              //Matter.World.remove(world,shark[shark.length-1].body);
              Matter.Body.setVelocity(shark[shark.length-1].body,{x:0,y:5});

          }
          
        }
    }
}
   // }

  

}

/*function displayImage(){
    
    image(gun1,440,370,200,100);
}
function displayRod(){

    image(rod1,pos.x,pos.y,400,200);       
}*/
