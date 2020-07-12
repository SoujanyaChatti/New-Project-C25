class Box{
constructor(x,y,width,height){
    var options={
        isStatic:true
    }
   this.body=Bodies.rectangle(x,y,170,170,options);
   this.width=170;
   this.height=170;
  // World.add(world,this.body);
  
    this.image=loadImage("sprites/bin.png");
    
}
display(){
   imageMode(CENTER);
    image (this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}
}