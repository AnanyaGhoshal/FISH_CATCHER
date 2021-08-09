class Shark{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':0.2,
            'friction':0.15,
            'density':0.1

        }

        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.image = loadImage("shark.jpg");
        World.add(world,this.body);
        this.Visiblity = 255;

    }

    display(){

        if(this.body.position.y<500 && this.body.position.y>550){

            World.remove(world,this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y,this.radius*15,this.radius*4);
            pop();

        }else{

            var pos = this.body.position;  
       
            push();  
            fill("brown");
            stroke("brown");
            imageMode(CENTER);
            ellipseMode(RADIUS);
            image(this.image,pos.x,pos.y,this.radius*15,this.radius*4);
            pop();
           
        }

    }
}