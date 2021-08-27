class ball{
    constructor(x,y,r){
        var prop = {
            restitution: 1
        }
        this.body = Bodies.circle(x,y,r,prop)
        this.r = r 
        World.add(world,this.body)
    }
    display(){
        fill("blue")
        ellipse(this.body.position.x,this.body.position.y,this.r)
    }
}