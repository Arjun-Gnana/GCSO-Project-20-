//Creating all needed variables
var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  //Setting Random Speed and Weight
  speed = random(55,90);
  weight = random(400,1500);
  
  //Creating the car (object)
  car = createSprite(50,200,50,50);
  car.velocityX = speed;

  //Creating the Wall
  wall = createSprite(1500,200,25,height/2);
  wall.shapeColor = color (80,80,80);
}

function draw() {
  background(150,450,955);  
 

  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }
    if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100)
    {
      car.shapeColor=color(0,255,0);
    }
  }



  drawSprites();
}