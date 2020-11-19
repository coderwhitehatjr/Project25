
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,binImage
var paper,paperImage

function preload()
{
	paperImage.loadImage = ("paper.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin.image = loadImage("sprites/dustbingreen.png")
	paper.image = loadImage("sprites/paper.png")
	
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper = ellipse(200,600, 55, 55);
 
  keyPressed();
  drawSprites();
}
function keyPressed(){
if(keyCode=== UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

}


}

