
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    ground = createSprite(0,670,2200,40);
    paper = createSprite(40,600,40,40);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(KeyIsDown("UP_ARROW")) {
	  paper.velocityX = 6;
  } 
  

  drawSprites();
 
}



