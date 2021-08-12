var sprite
function setup() {
  createCanvas(400,400);
sprite = createSprite(200,200,50,50)

}

function draw() 
{
  background(30);
drawSprites()
if (keyDown("left")){
sprite.x -= 2
}
if (keyDown("up")){
  sprite.y -= 2
  }
}




