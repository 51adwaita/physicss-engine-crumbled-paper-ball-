
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball , groundObj, leftSide , rightSide
var world
var radius = 40


function setup() {
	createCanvas( 800 , 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;


	var ball_options ={
		isStatic : false,
		restitution:0.8,
		friction:0,
		density:1.2	
	}


		//Create the Bodies Here.
		ball = Bodies.circle(260,100,radius/2,ball_options);
		World.add(world,ball)
	
  groundObj =new Ground(width/2,670,width,20);
	leftSide =new Ground(1100,600,20,120)
	rightSide = new Ground(1350,600,20,120)

	Engine.run(engine);
}



function draw () {
 
	rectMode(CENTER)
	background(0);

	Engine.update(engine)

	ellipse(ball.position.x,ball.position.y,radius,radius)
	groundObj.show();
	leftSide.show();
	rightSide.show();
	 
	drawSprites();

}



function keyPressed() {
	if(keyCode === UP_ARROW){
	  Matter.body.applyForce(ball, ball.position , {x:85 , y:-85}); 
}
	}
	
