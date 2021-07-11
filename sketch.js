const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrops = []; 
var gfish = [];
var shark = [];
var boat, string, bgImg, rod, string1, string3;
var score;
var gameState ="play";

function preload(){

    bgImg = loadImage("bg.gif");

}

function setup(){
  
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    
    boat = new Boat(150,405,100,10);
    gfish.push(new Seaf(1200, 500));
    rod = new Fishrod(350,330,100,50,boat.angle);
    string = new Slingshot(boat.body,{x:0,y:0},{x:150,y:415});
   // string1 = new Slingshot(rod.body,{x:0,y:30},{x:330,y:380});
    shark.push(new Shark(1200 , 550));
    score = 0;

    
}

function draw(){

    background(bgImg);

    Engine.update(engine);


    //rod.body.position.x = boat.body.position.x+140;
    //rod.body.position.y = boat.body.position.y-20;

    if(boat.body.speed<0.03){
        string.fly();
    }
    if(boat.body.position.y>550){
        gameState = "end";
    }

    if(gameState==="end"){
        gfish = [];
        shark = [];
        fill("red");
        textSize(30);
        text("GAME OVER !!!",500,300);
    }

    spawnFish();

    boat.display();
    rod.display();
    console.log(rod.body.angle);
    //string1.display();

    fill(0);
    textSize(20);
    text("Score: "+score,1100,50);

    
} 

function mouseDragged(){
    
    Matter.Body.setPosition(rod.body,{x:mouseX, y:mouseY});
}

function keyPressed(){

    if(keyCode===37){
        boat.body.position.x -=10;
    }

    if(keyCode===39){
        boat.body.position.x +=10;
    }

}


function spawnFish(){

    if(gfish.length>0){
        gfish.push(new Seaf(1200,random(350,600)));
    }

    for(var i =0; i<gfish.length;i=i+20){
        Matter.Body.setVelocity(gfish[i].body,{x:-5,y:0});
        gfish[i].display();
        
    }

  if(shark.length>0){
      shark.push(new Shark(1190, random(300,400)));
  }
  
  for(var i = 0; i<shark.length; i=i+200){
      Matter.Body.setVelocity(shark[i].body,{x:-5,y:0});
      shark[i].display();
  }


}
