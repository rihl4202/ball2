class ground{
    constructor(x,y,w,h){
        var prop = {
            isStatic: true 
        }
        this.body = Bodies.rectangle(x,y,w,h,prop)
        this.w = w
        this.h = h
        World.add(world,this.body)
    }
    display(){
        fill("purple")
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}