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
        this.image = loadImage("assets/boat.png");
        this.image2 = loadImage("assets/fisher2.png");

        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;
     
        push();  
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height*2);
        image(this.image2,pos.x+170,pos.y-100,100,120);
        pop();

    }
}