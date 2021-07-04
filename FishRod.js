class FishRod{

    constructor(x,y,width,height){
        var options={
            isStatic: false,
            frictionAir: 0.5

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("net.png");
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
       // rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,0,0,this.width*2,this.height*12);
        pop();
    }
    }

