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
        World.add(world,this.body);
        this.Visiblity = 255;

    }

    display(){

        if(this.body.position.x>380 && this.body.position.x>410 && this.body.position.y>350 && this.body.position.y<370){

            World.remove(world,this.body);

            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(fishImg, this.body.position.x, this.body.position.y,this.radius*5,this.radius*5);
            pop();
        }
      
        var pos = this.body.position;  

        push();  
       // fill("brown");
        //stroke("brown");
        imageMode(CENTER);
       // ellipseMode(RADIUS);
        image(fishImg,pos.x,pos.y,this.radius*5,this.radius*5);
        pop();
       
    }
    
}