class stone {
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':0.9,
            'density':12
        };
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.width = 90;
        this.height = 30;
        World.add(world,this.body); 
    };
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;

        push();
        translation(pos.x,pos.y);
        rotate(angle);
        strokeWeight(2);
        stroke('white');
        fill('green');
        rectMode(CRNTER)
        rect(0,0,this.width,this,height);
        pop();
    };
};