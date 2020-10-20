
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, dustbinObj1, dustbinObj2, dustbinObj3;
var ground1;

function preload()
{
	
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
sprite=createSprite(600,620,10,80);
sprite.shapeColor="red";


paper1 = new Paper(160,640,40);
paper1.image=loadImage("Sprites/paper.png");
ground1 = new Ground(400,670,800,20);
dustbinObj1 = new Dustbin(600,620,10,80);
dustbinObj2 = new Dustbin(680,620,10,80);
dustbinObj3 = new Dustbin(640,655,80,10);
dustbinObj3.image=loadImage("Sprites/dustbingreen.png");
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper1.display();
  ground1.display();
  dustbinObj1.display();
  dustbinObj2.display();
  dustbinObj3.display();
  

  
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
  
  }
}

