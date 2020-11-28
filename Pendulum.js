class Pendulum{
    constructor(x,y,r,){
        var options ={
            restitution : 1,
            friction : 0,
            frictionAir : 0.0,
            slop : 1,
            inertia : Infinity
        };
        this.body = Bodies.circle(x,y,r,options);
        this.x = x
        this.y = y
        this.r = r
        
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle
        var pos = this.body.position
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        noStroke()
        fill('blue')
        ellipse(0,0,this.r,this.r)
        pop();
    }
}