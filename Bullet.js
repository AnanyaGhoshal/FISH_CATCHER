class Bullet{
    constructor(x,y,width,height,buletangle){
      var  options={

        'isStatic':true,
        'frictionAir':0.1,
        'density':0.02

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 5;
        this.height = 5;
        this.buletangle = buletangle;
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,PI/2);
    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        fill(0);
        translate(pos.x,pos.y);
        rotate(angle);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}