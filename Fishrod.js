class Fishrod{

    constructor(x,y,width,height,rodangle){
        var options={
            isStatic: true,
            frictionAir: 0.5

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("rod.png");
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;


        if(keyIsDown(DOWN_ARROW) && angle<1 && angle>0.6){
            angle+=0.01;
            Matter.Body.setAngle(this.body,angle);
            console.log(this.body.angle);
        }
        if(keyIsDown(UP_ARROW) && angle>0.6 && angle<1){
            angle -=0.01;
            Matter.Body.setAngle(this.body,angle);
        }

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        rectMode(RADIUS);
        imageMode(CENTER);
        image(this.image,0,0,this.width*2,this.height);
        pop();
    }
    }

