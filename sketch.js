function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  fill("yellow");
  ellipse(400,200,30,25);
    fill("blue");
  ellipse(200,200,20,15);
    fill("red");
  ellipse(200,100,20,15);
    fill("green");
  ellipse(600,100,20,15);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
