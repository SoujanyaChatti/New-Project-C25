var ground,paper,dustbin,box1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload(){
	dustbin=loadImage("sprites/bin.png");
}
function setup() {
	createCanvas(1000, 700);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	

	ground=new Ground(500,620,1000,50);
	paper=new Paper(50,580);

	
	
	box1=new Box(850,510);
	box2=new Ground(790,505,20,155);
	box3=new Ground(900,505,20,155);
}


function draw() {
rectMode(CENTER);
ellipseMode(RADIUS);
  background(255);
  Engine.update(engine);
  console.log(paper.body.position.y);
  paper.display();
  ground.display();
  
  box2.display();
  box3.display();
  box1.display();
  
  
  fill("black");
  text("USE THE CONTROL KEYS TO THROW THE PAPER INTO THE BIN",300,50);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode==UP_ARROW){
	   Body.applyForce(paper.body,paper.body.position,{x:220,y:-220});
	}
	else if(keyCode==RIGHT_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:50,y:0});
	}
	else if(keyCode==LEFT_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:-50,y:0});
	}
}

