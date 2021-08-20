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
        //this.Visiblity = 255;

    }

    display(){

            var pos = this.body.position;  

            push();  
           // fill("brown");
            //stroke("brown");
            imageMode(CENTER);
            //ellipseMode(RADIUS);
            image(fishImg,pos.x,pos.y,this.width,this.height);
            pop();

            /*if(keyIsDown(UP_ARROW) && fish!==0){

                World.remove(world,this.body);
    
                push();
                this.Visiblity = this.Visiblity - 5;
                tint(255,this.Visiblity);
                image(fishImg, pos.x, pos.y,50,50);
                pop();
            }*/
        
      
  
       
    }
    
}