class Boat{

    constructor(x,y,width,height){

        var options={

            'isStatic':false,
            'restitution':0.01,
            'friction':0.03,
            'frictionAir':0.1,
            'density':0.03

        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("boat.png");
        this.image2 = loadImage("fisher2.png");
        this.image3 = loadImage("tenor.gif");
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
        push();
        fill("brown");
        stroke("brown");
        rectMode(CENTER);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width*3,this.height*15);
        image(this.image2,pos.x+70,pos.y-90,this.width,this.height*10);
        pop();

    }
}