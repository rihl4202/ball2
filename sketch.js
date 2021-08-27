//renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground1 = new ground(200,390,400,20)
  ground2 = new ground(200,10,400,20)
  ground3 = new ground(10,200,20,400)
  ground4 = new ground(390,200,20,400)
  ball1 = new ball(200,200,15)
  button = createImg("push.png")
  button.position(30,30)
  button.size(50,50)
  button.mouseClicked(function(){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:0,y:-0.05})
  })
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()
  ball1.display()
}

