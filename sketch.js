const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var raindrops = []; 
var gfish = [];
var shark = [];
var boat, string, bgImg, rod, string2, string3;
var score;
var gameState ="play";

function preload(){

    bgImg = loadImage("bg.gif");

}

function setup(){
  
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    
    boat = new Boat(50,400,100,10);
    gfish.push(new Seaf(1200, 500));
    rod = new FishRod(128,170,150,5);
    string = new Slingshot(boat.body,{x:170,y:300});
    string2 = new Slingshot(rod.body,{x:550,y:430});
    string3 = new Slingshot(rod.body,{x:170,y:300});
    shark.push(new Shark(1200 , 550));
    score = 0;
 

     /*   for(var i = 0; i <1500; i++){

            raindrops.push(new Drops(random(0,1200),random(600,500)));

        }*/
       

    
}

function draw(){

    background(bgImg);

    Engine.update(engine);

    spawnFish();

    if(gameState!=="end"){
        var angle = rod.body.angle;
        if(keyIsDown(DOWN_ARROW) && angle<-1.2){
            angle+=20;
            Matter.Body.setAngle(rod.body,angle);
        }
        if(keyIsDown(UP_ARROW) && angle>-1.9){
            angle -=15;
            Matter.Body.setAngle(rod.body,angle);
        }
    }

   /* for(var i = 0; i<1500; i++){

       raindrops[i].show();

    } */
    boat.display();
    rod.display();

    fill(0);
    textSize(20);
    text("Score: "+score,1100,50);

    
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
        shark.push(new Shark(1190, random(350,450)));
    }
    
    for(var i = 0; i<shark.length; i=i+200){
        Matter.Body.setVelocity(shark[i].body,{x:-5,y:0});
        shark[i].display();
    }
   

}
