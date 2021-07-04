class Drops{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':1.0,
            'density':3
        }


        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.image = loadImage("blue.png");

        World.add(world,this.body);
        

    }

    show(){

        var pos = this.body.position;

        ellipseMode(RADIUS);
        fill("skyblue");
        stroke("skyblue");
        strokeWeight(7);
        imageMode(CENTER); 
        image(this.image,pos.x,pos.y,this.radius*5,this.radius*5);   

    }

    reposition(){

        if(this.body.position.y>600){

            Matter.Body.setPosition(this.body,{x:random(0,1200),y:random(600,500)})
        }
    }
}