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
        Matter.Body.setAngle(this.body,PI/6);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        this.body.angle = rod.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(0);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}