class Paper{
    constructor(x,y,width,height){
        var options={
            'isStatic':false,
            'restitution':0.1,
            'friction':3,
            'density':1.5
        }
       this.body=Bodies.rectangle(x,y,50,50,options);
       this.width=50;
       this.height=50;
      this.image=loadImage("sprites/paper.png");
      World.add(world,this.body);
        
    }
   display(){
      rectMode(CENTER);
       imageMode(CENTER);
       image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
   }

    }
   