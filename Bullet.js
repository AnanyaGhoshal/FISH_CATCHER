class Bullet{
    constructor(x,y){
      var  options={
        isStatic:true
        }
        
        this.body = Bodies.circle(x,y,30,options);
        this.r = 30;
        this.speed = 0.05;
        World.add(world,this.body);
      
    }

    shoot(){

       var newAngle = rod.body.angle - 0.5
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
   
    }

    display(){

        var pos = this.body.position;
        
        push();
        fill(0);
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop();
    }
}