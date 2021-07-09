const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base;
var bridge;
var link;
var stone;





function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;



for(var i = 0; i <= 8; i++) {
  var x = random(width / 2 - 200, width/ 2 + 300);
  var y = random(-10, 140);
  
}
  

  

}

function draw() {
  background(51);
  Engine.update(engine);
  base.show();
  bridge.show();
  stones.show();
  link.show();
  

}
