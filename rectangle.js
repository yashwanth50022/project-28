class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        this.rectangle=loadImage("dustbingreen.png")

        World.add(world,this.body)

    }
    display(){
        
        image (this.rectangle,485,320)
        
        var pos=this.body.position;
        rectMode(CENTER);
        fill ("white");
        rect(pos.x,pos.y,this.width,this.height);

    }
}