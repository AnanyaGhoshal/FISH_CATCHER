const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrops = []; 
var gfish = [];
var shark = [];
var boat, string, bgImg, rod, string1, string3, hook, bulet, rod1, gun1, fishImg;
var rodB, gunB, gunB1, rodB1, pos;
var score;
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
    gfish.push(new Seaf(1200, 500));
    rod = new Fishrod(440,370,200,100,boat.angle);
    hook = new Bullet(490,500,10,10,boat.angle);
    string = new Slingshot(boat.body,{x:0,y:0},{x:150,y:350});
    //string1 = new Slingshot(hook.body,{x:0,y:30},{x:450,y:480});
    shark.push(new Shark(1200 , 350));
    gunB1 = createSprite(1135,110,70,20);
    rodB1 = createSprite(1135,80,70,20);
    rodB = createButton('Rod');
    gunB = createButton('Gun');
    score = 0;

    rodB.position(1125,70);
    gunB.position(1125,100);

     pos = rod.body.position;

    
}

function draw(){

    background(bgImg);

    Engine.update(engine);

    if(mousePressedOver(gunB1)){
        displayImage();
    }else{
        displayRod();
    }

    //rect(hook.position.x,hook.position.y,10,10);

    //rod.body.position.x = boat.body.position.x+240;
    //rod.body.position.y = boat.body.position.y-20;

    if(boat.body.position.y>550){
        gameState = "end";
    }

    if(gameState==="end"){
        gfish = [];
        shark = [];
        fill("red");
        strokeWeight(2);
        stroke(0);
        textSize(30);
        text("GAME OVER !!!",500,300);
    }

    

    spawnFish();

    boat.display();
    rod.display();
    hook.display();
    //string1.display();

    fill(0);
    textSize(20);
    text("Score: "+score,1080,50);
    drawSprites();

    
} 




function spawnFish(){

    if(gfish.length>0){
        gfish.push(new Seaf(1210,random(420,600)));
    }

    for(var i =0; i<gfish.length;i=i+20){
        Matter.Body.setVelocity(gfish[i].body,{x:-5,y:0});
        gfish[i].display();
        
        var coll = Matter.SAT.collides(hook.body,gfish[i].body);

        if(coll.collided){
            score = score +1;
            push();
            visiblity = visiblity-5;
            tint(255,visiblity);
            image(fishImg, gfish[i].body.position.x,gfish[i].body.position.y,5);
            pop();
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

}

function displayImage(){
    
    image(gun1,pos.x,pos.y,200,100)
}
function displayRod(){

    image(rod1,pos.x,pos.y,400,200);       
}
