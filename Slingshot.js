class Slingshot{
    constructor(bodyA,pointB){
        
        var options={
            bodyA: bodyA,
            pointB: pointB,
            length: 100,
            stiffness: 0.4
            
        }
        
        this.sling =Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.sling);
        
    }

    display(){

        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        push();
        stroke("brown");
        strokeWeight(5);       
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
        }
    }
}
