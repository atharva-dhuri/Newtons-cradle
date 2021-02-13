const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200, 270, 70);
	bob2 = new Bob(250, 270, 70);
	bob3 = new Bob(300, 270, 70);
	bob4 = new Bob(350, 270, 70);
	bob5 = new Bob(400, 270, 70);
	roof = new Roof(350, 100, 400, 40);
	rope1 = new Rope(bob1.body, {x: 190, y: 116})
	rope2 = new Rope(bob2.body, {x: 260, y: 116})
	rope3 = new Rope(bob3.body, {x: 330, y: 116})
	rope4 = new Rope(bob4.body, {x: 400, y: 116})
	rope5 = new Rope(bob5.body, {x: 470, y: 116})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:300, y:-1});
  
	}
}