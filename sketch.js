const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bullet;
var bullets=[] 
var gfish = [];
var shark = [];
var boat, string, bgImg, rod, rod1, gun1, fishImg,rodB, gunB, image1, houqe,fish, form;
var shootsound;
var visiblity = 255;
var score;
var gameState ="start";

function preload(){

    bgImg = loadImage("sea.gif");
    fishImg = loadImage("goldfish.png");
    gun1 = loadImage("gun.png");
    rod1 = loadImage("net.png");
    shootsound = loadSound("shoot.mp3");

}

function setup(){
  
    createCanvas(1200,600);

    engine = Engine.create();
    world = engine.world;
    
    boat = new Boat(150,200,500,70);
    string = new Slingshot(boat.body,{x:0,y:0},{x:150,y:200});

    rod= new Fishrod(400,260,200,100,boat.angle);
    net = new Fishrod(400,260,250,100,boat.angle);
    gun = new Fishrod(400,180,200,100,boat.angle);
    houqe = new Bullet(400,180);

    gfish.push(new Seaf(1200, 420));   
    shark.push(new Shark(1200 , 480));
   
    form = new Form();

    image1 = rod1;
    rod=net;

    score = 0;
    fish = 0;
    
}

function draw(){

    background(0);

    Engine.update(engine);

    if(gameState==="start"){

        form.display();
        
    }

   if(gameState==="play"){

    background(bgImg);
   
    
    boat.display();
    rod.display();

    spawnFish();

    for(var i=0;i<gfish.length;i++){
        if(gfish[i] !==undefined && image1 === rod1){
            var collision = Matter.SAT.collides(rod.body,gfish[i].body);

           if(collision.collided){
            
            fish ++;
            score++;
            Matter.World.remove(world,gfish[i].body);
            gfish.splice(i,1);
            i--;
                      
             }
        }
    }

    for(var i=0;i<shark.length;i++){
        if(shark[i] !==undefined && image1 === rod1){
            var collision = Matter.SAT.collides(rod.body,shark[i].body);

           if(collision.collided){
            Matter.Body.setStatic(rod.body, false);
            Matter.Body.setVelocity(rod.body, { x: 0, y: 10 });
            setTimeout(() => {
                
                rod.remove();
            gameState = "end";
              }, 2000);
                                  
             }
        }
    }
    

    for (var i = 0; i < bullets.length; i++) {
       bullets[i].display();
        for (var j = 0; j < shark.length; j++) {
          if (bullets[i] !== undefined && shark[j] !== undefined) {
            var collision = Matter.SAT.collides(bullets[i].body, shark[j].body);
            if (collision.collided) {
                score += 5;
                shark[j].remove(j);
                j--;
            
              Matter.World.remove(world, bullets[i].body);
              bullets.splice(i, 1);
              i--;
            }
        }
        else if(boat !== undefined && shark[j] !== undefined){
            
            var collision1 = Matter.SAT.collides(boat.body,shark[i].body);
            if(collision1.collided){
                string.fly();
            }
            

        }
    }
    for(var k=0; k<gfish.length; k++){
        if(bullets[i]!==undefined && gfish[k]!==undefined){
            var collision = Matter.SAT.collides(bullets[i].body, gfish[k].body);
            if(collision.collided){
                score -=2;
                if(fish!=0){
                    fish -=1;
                    };

                Matter.World.remove(world,gfish[k].body);
                gfish.splice(k,1);
                k--;

               
            
            }
        }
    }
}

  if(boat.body.position.y>550){
      gameState = "end";
  }
     
   }
   
    if(gameState==="end"){

        background(bgImg);
        gfish = [];
        shark = [];
        gameOver();

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
    
    if(gfish.length>0 && frameCount%100 ===0){
        gfish.push(new Seaf(1200,random(250,600)));
    }

    if(shark.length>0 && frameCount%400===0){
        shark.push(new Shark(1200, random(300,500)));
    }
    
        for(var i = 0; i<shark.length; i++){
            Matter.Body.setVelocity(shark[i].body,{x:-5,y:0});
            shark[i].display();
        }

    for(var i =0; i<gfish.length;i++){
        Matter.Body.setVelocity(gfish[i].body,{x:-5,y:0});
        gfish[i].display();
    }

   
    
}
}  
  
function changeToRod(){
    robB= true;
    image1 = rod1;
    rod = net;
}

function changeToGun(){
    gunB=true;
    image1 = gun1;
    rod= gun;
}

function keyReleased() {
    if (keyCode === 32 && image1===gun1) {
      bullets[bullets.length - 1].shoot();
    }
  }

  function keyPressed() {
      if(image1===gun1){
        if (keyCode === 32) {
            var bullet = new Bullet(rod.body.position.x, rod.body.position.y);
            console.log(bullet)
            bullets.push(bullet);
            shootsound.play();
          }
      }   
  }


  function gameOver() {
    
    swal(
      {
        title: `Game Over!!!`,
        text: "Thanks for playing!!",
        
        confirmButtonText: "Play Again"
      },
      function(isConfirm) {
        if (isConfirm) {
          location.reload();
        }
      }
    );
  }