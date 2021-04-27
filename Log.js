class Log {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':.3,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       

    
        World.add(world, this.body);

    }
    display() {

    var pos = this.body.position;
    
    fill("brown");
    rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }

}