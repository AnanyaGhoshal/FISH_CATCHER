class Shark{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':0.5,
            'friction':0.05,
            'density':0.03

        }

        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        //this.image = loadImage("shark.jpg");
        World.add(world,this.body);

    }

    display(){

        var pos = this.body.position;  
       
        push();  
        fill("brown");
        stroke("brown");
        //imageMode(CENTER);
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius,this.radius);
        pop();

    }
}