var box;

function setup() {
  createCanvas(400,400);
  box =  createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if (keyIsDown(65))
  {
  box.position.x = box.position.x -5;
  }
if (keyIsDown(68))
{
box.position.x = box.position.x +5;
}

if (keyIsDown(87))
  {
  box.position.y = box.position.y -5;
  }
if (keyIsDown(83))
{
box.position.y = box.position.y +5;
}



  drawSprites();
}




