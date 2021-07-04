class Seaf{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':0.5,
            'friction':0.03,
            'density':0.01

        }

        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.image = loadImage("goldfish.png");
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;  
       
        push();  
        fill("brown");
        stroke("brown");
        imageMode(CENTER);
       // ellipseMode(RADIUS);
        image(this.image,pos.x,pos.y,this.radius*5,this.radius*5);
        pop();

    }
}