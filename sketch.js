var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var box1,box2,box3;
var paper,chain;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//ground.shapeColor=color("yellow");
	paper=new Paper(200,550,70);
	ground=new Ground(width/2,670,width,10)
	box1=new Box(485,495,20,348);
	 box2=new Box(630,660,270,20);
	 box3=new Box(767,495,20,348);
	 paper=new Paper(200,600,70);
	 chain=new Chain(paper.body,{x:200,y:100})
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
 
  
  
  
  ground.display();
  paper.display();
 
  
  box1.display();
  box2.display();
  box3.display();
  chain.display();
  drawSprites();
 
}
//function keyPressed(){
//	if(keyCode===UP_ARROW){
	//Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-170})

	//}
//}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    chain.fly()
}

