var box;
//Cria uma varavel chamada box
var ImagemBandeira;
function preload() {
  ImagemBandeira = loadImage('Bandeira.jpg')


}

function setup() {
  createCanvas(400, 400);
  box = createSprite(200, 200, 30, 30);
  //criou um sprite na coodernada 200x e 200y e na largura 30 e na altura 30
  box.addImage('Bandeira', ImagemBandeira);
  box.scale = 0.1;
  //box.shapeColor = "yellow";
  //esse codecó pinta a variavel box de amarelo


}

function draw() {
  background('rgb(0,255,0)');
  //
  if (keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5;
  }

  if (keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5;

  }

  if (keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y - 5;

  }

  if (keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y + 5;
  }

  drawSprites();
}




