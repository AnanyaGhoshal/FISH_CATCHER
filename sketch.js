const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bullet = []; 
var gfish = [];
var shark = [];
var boat, string, bgImg, rod, string1, string3, hook, rod1, gun1, fishImg;
var rodB, gunB, gunB1, rodB1, pos, image1;
var fish, form;
var seaSound, shootingSound, scream, feedBack, ok;
var visiblity = 255;
var score;
var gameState ="start";

function preload(){

    bgImg = loadImage("bg.gif");
    fishImg = loadImage("goldfish.png");
    gun1 = loadImage("gun.png");
    rod1 = loadImage("rod.png");
    scream = loadSound("scream.mp3");
    seaSound = loadSound("sea.mp3");
    shootingSound = loadSound("shoot.mp3");

}

function setup(){
  
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    
   // hook = Bodies.rectangle(490,500,10,10,{isStatic:true});
   // World.add(world,hook);
    
    boat = new Boat(150,350,500,10);
    bullet.push(new Bullet(300,115));
    gfish.push(new Seaf(1200, 420));
    rod = new Fishrod(400,330,200,100,boat.angle);
    string = new Slingshot(boat.body,{x:0,y:0},{x:150,y:350});
    shark.push(new Shark(1200 , 480));
    hook = new Bullet(400,330);
  
    form = new Form();

    image1 = rod1;

    score = 0;
    fish = 0;

 
    
}

function draw(){

    background(255);

    Engine.update(engine);

    if(gameState==="start"){

        form.display();
        
    }


   if(gameState==="play"){

    background(bgImg);
    spawnFish();

    rodB = createButton('Rod');
    gunB = createButton('Gun');

    rodB.position(1125,70);
    gunB.position(1125,100);

    boat.display();
    rod.display();
    hook.display();

    if (mouseX > 1124 && mouseX < 1140 && mouseY > 60 && mouseY < 80) {
        robB= true;
        image1 = rod1;
        
    } else if(mouseX > 1124 && mouseX < 1140 && mouseY > 80 && mouseY < 110){
       gunB=true;
       image1 = gun1;
} else {
    rodB = false;
		        gunB = false;
    };


    if(boat.body.position.y>550){
        
        gameState = "end";
        scream.play();
        feedBack = createInput("FEEDBACK");
        feedBack.position(500,350);

    }

   }
   

    if(gameState==="end"){

        background(bgImg);
        scream.stop();
        gfish = [];
        shark = [];
        bullet = [];

        push();
        fill("red");
        strokeWeight(2);
        stroke(0);
        textSize(30);
        text("THANKS FOR PLAYING !!!",430,300);
        pop();

        ok = createButton('OK');
        ok.position(700,360);
        ok.style('background','skyblue');

       // if(mouseX>499 && mouseX<540 && mouseY>359 && mouseY<369){
           
            if(mouseX>499 && mouseX <730 && mouseY> 350 && mouseY<400){
                //feedBack.hide();
                textSize(20);
                fill("green");
                text("THANKS FOR YOUR KIND FEEDBACK",450,450);              
            }
        //}
    }

    push();
    fill(0);
    textSize(20);
    text("Score: "+score,1080,50);
    text("Fish: "+fish,10,50);
    pop();

    

    
} 



function spawnFish(){

  if(gameState!=="end"){

    if(gfish.length>0){
        gfish.push(new Seaf(1200,random(400,600)));
    }

    for(var i =0; i<gfish.length;i=i+15){
        Matter.Body.setVelocity(gfish[i].body,{x:-5,y:0});
        gfish[i].display();
        
        var collision = Matter.SAT.collides(rod.body,gfish[i].body);

        if(collision.collided){
            score = score +5;
            fish = fish+1;
            Matter.World.remove(world,gfish[i].body);           
        }
        
    }

    if(shark.length>0){
        shark.push(new Shark(1200, random(400,600)));
    }
    
    for(var i = 0; i<shark.length; i=i+100){
        Matter.Body.setVelocity(shark[i].body,{x:-5,y:0});
        shark[i].display();
  
        var collision = Matter.SAT.collides(boat.body,shark[i].body);
  
        if(collision.collided){
            string.fly();
        }
    }

        if(bullet.length>0){
            bullet.push(new Bullet(300,115));
        }

        if(keyIsDown(LEFT_ARROW)){
        for(var i=0; i<bullet.length; i=i+15){
          Matter.Body.setStatic(bullet[i].body,false);
          Matter.Body.setVelocity(bullet[i].body,{x:5,y:2});
          bullet[i].display();
          shootingSound.play();

          var collision = Matter.SAT.collides(shark[i].body,bullet[i].body);

        //  console.log(shark[i].body);

          if(collision.collided){
              Matter.Body.setVelocity(shark[i].body,{x:10,y:0});
              score = score+2;

          }
         
          
        }
    }
}
   
  

}
