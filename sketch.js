const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("background.png");
  baseimage = loadImage("base.png");
  playerimage = loadImage("player.png");
 // arco = loadImage("playerArcher.png")
  arrowImg = loadImage("arrow.png")
}
var a = 0

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //criar corpo da base do jogador
  playerBase=Bodies.rectangle (windowWidth/10,windowHeight/2,180,150, {isStatic:true})
  World.add(world, playerBase)

  //criar corpo do jogador
  player=Bodies.rectangle (windowWidth/6,windowHeight/3.1,50,180,{isStatic:true})
  World.add(world, player);

  arrow=Bodies.rectangle (windowWidth/6,windowHeight/3.1,50,180,{isStatic:true})
  World.add(world, arrow);

  angleMode(DEGREES)
}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  image(playerimage,player.position.x,player.position.y,50,180)

  //exibir a imagem da base do jogador usando a função image()
  image(baseimage,playerBase.position.x,playerBase.position.y,180,150)

  image(arrowImg,arrow.position.x,arrow.position.y,100,100)


  push ();
  translate (windowWidth/6,windowHeight/3.1);
  rotate (a);
 // image (arco, 20, 0, 100,100);
  pop ();
  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}


function keyPressed(){
  console.log(keyCode)
  if(keyCode==39){
    a++;
  }
  if(keyCode==37){
    a--;
  }
  if(keyCode==32){
    a *= Math.PI/180;
    v = p5.Vector.fromAngle(a);
    v.mult(90/Math.PI)
    Body.setStatic(arrow, false);
    Body.setVelocity(arrow, {x:v.x, y:v.y})
  }
}