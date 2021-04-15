class Box{
    constructor(x,y,width,height){

        var ball_options ={
            restitution: 1.0
        }
    
        this.body = Bodies.rectangle(x,y,width,height, ball_options);
        this.width = width
        this.height = height 
        World.add(world,this.body);

    }
    display(){

        push ()
        translate (this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill("white")
        rect(0,0, this.width, this.height);
        pop ()
    }
}