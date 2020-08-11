const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world;
var Ground1,Dustbin1,Paper1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	
    Paper1 = new Paper(200,50,40);
	Ground1= new Ground(300,360,1900,10);
	Dustbin1 = new Dustbin(700,350);
	
	
	
	

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
  background(255);
  

 
 
 //Ground
 Ground1.display();
 Paper1.display();
 // Boxes
 Dustbin1.display();
   
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x : 15, y : -15});
	}
}