class Slingshot{
    constructor(bodyA,pointA,pointB){
        
        var options={
            bodyA: bodyA,
            pointA:pointA,
            pointB: pointB,
            length: 10,
            stiffness: 0.4
            
        }

        
        this.sling =Constraint.create(options);
        this.pointB = pointB;
        this.pointA = pointA;
        World.add(world,this.sling);
        
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){

        this.sling.bodyA = body;
     
    }

    display(){

        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position+this.pointA;
        var pointB = this.pointB;

        push();
        stroke("brown");
        strokeWeight(5);       
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}
