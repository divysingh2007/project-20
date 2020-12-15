var car,wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
speed=random(55,90);
weight=random(400,1500);

  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
wall=createSprite(1200,200,60,height/2);

}

function draw() {
  background(255,255,255);  
  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2 
   && car.y- wall.y < wall.height/2 + car.height/2
    && wall.y- car.y < wall.height/2 + car.height/2 ){
 
     wall.shapeColor="red";
     car.shapeColor="red";
    }
    else{ 
      wall.shapeColor="green";
      car.shapeColor="green";
    }
  drawSprites();
}