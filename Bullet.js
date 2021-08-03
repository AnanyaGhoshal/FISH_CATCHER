class Bullet{
    constructor(x,y){
      var  options={
        isStatic:true,
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,    
        }
        this.body = Bodies.rectangle(x,y,15,15,options);
        this.width = 15;
        this.height = 15;
        this.speed = 0.05;
        World.add(world,this.body);
       // Matter.Body.setAngle(this.body,PI/6);
    }

    shoot(){
        var newAngle = rod.angle-0.5;
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(20);
        Matter.Body.setStatic(this.body,{isStatic:false});
        Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y});          
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(0);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}