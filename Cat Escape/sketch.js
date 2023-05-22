
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var cat, catImg, catAnimation;
var menina, meninaImg,  meninaAnimation;
var movel, comida, trampolim, plataforma;
var movelImg, comidaImg, trampolimImg, plataformaImg;
var planoDeFnd, planoDeFndImg;

function preload(){
	//catImg1 = loadImage ();
	meninaImg = loadImage ("./assets/dona_do_gato5.png");
	meninaAnimation = loadAnimation ("./assets/dona_do_gato1.png","./assets/dona_do_gato2.png","./assets/dona_do_gato3.png","./assets/dona_do_gato4.png");
	catImg = loadAnimation ("./assets/cat1.png");
	catAnimation = loadAnimation ("./assets/cat1.png","./assets/cat2.png","./assets/cat3.png");
	planoDeFndImg = loadImage ("./assets/planodefundo1.png");

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	//Crie os Corpos aqui.

	cat = createSprite (1500,170, 50,50);
	cat.addAnimation ("parado", catImg);
	cat.scale = 1.7;

    rectMode(CENTER);
}


function draw() {
  background(0);
  image(planoDeFndImg, 0, 0, width, height);
  
  drawSprites();
  Engine.run(engine);
}

