class chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA
            bodyB:bodyB
            length:10,
            stiffness:0.04,
            
        }
        
        chain = Constraint.create(options)
        World.add(world,chain)
    
    }
    display(){
        var pointA=chain.bodyA.position
        var pointB=chain.bodyB.position
    strokeWeight(8)
    line(pointA.x,pointA.y,pointB.x,pointB.y)

    }