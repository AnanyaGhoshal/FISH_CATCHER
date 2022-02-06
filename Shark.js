class Shark{

    constructor(x,y){

        var options={

            'isStatic':false,
            'restitution':0.2,
            'friction':0.15,
            'density':0.1

        }

        this.body = Bodies.rectangle(x,y,300,80,options);
        this.width = 300;
        this.height =80;        
        this.image = loadImage("assets/shark.jpg");
       
        World.add(world,this.body);
      
    }

    remove(index){
       
        Matter.Body.setVelocity(shark[index].body,{x:0,y:20});
        
        setTimeout(() => {
            
            Matter.World.remove(world, shark[index].body);
            shark.splice(index, 1);
          }, 500);


    }

    display(){

     
            var pos = this.body.position; 
          
            push();  
            imageMode(CENTER);        
            image(this.image,pos.x,pos.y,this.width,this.height);
            pop();
           

    }
}