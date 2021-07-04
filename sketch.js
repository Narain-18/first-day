
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgimg;
var player, rocket;
var playerimg , rocketimg;
var bullet , bulletimg;

function preload()
{
playerimg = loadImage("Image/player.png");
rocketimg = loadImage("Image/rocket.png");
bgimg = loadImage("Image/bg.jpg");
bulletimg = loadImage("Image/bullet.png");
}

function setup() {
	createCanvas(displayWidth,displayHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player = createSprite(50,displayHeight/2, 25,25);
	player.addImage(playerimg);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgimg);
  
	player.y = mouseY;

	if(keyDown("space")){
		bullets();
	}

	rockets();

drawSprites();
 
}

function bullets(){
	if(frameCount%20 === 0){
		bullet = createSprite(60,70,20,20);
		bullet.addImage(bulletimg);
		bullet.scale = 0.5;
		bullet.velocityX = 10;
		bullet.y = player.y
	}}

function rockets(){
	if(frameCount%60 === 0){
        rocket = createSprite(displayWidth-50,displayHeight/2, 25,25);
        rocket.addImage(rocketimg);
        rocket.velocityX = -5;
		rocket.y=Math.round(random(displayHeight-450,displayHeight+50));
	}
}
	






