class Seaf{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':0.5,
            'frictionAir':0.03,
            'density':0.01

        }

        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body);
      

    }

    display(){

            var pos = this.body.position;
           

            push();  
            imageMode(CENTER);
            rectMode(CENTER);
            image(fishImg,pos.x,pos.y,this.width,this.height);
            pop();
  
       
    }
    
}