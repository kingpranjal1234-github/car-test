var car,wall
var speed,wieght
var deformation


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

speed=random(55,90);
wieght=random(400,1500);
car=createSprite(50,200,50,50);
wall=createSprite(1500,200,60,height/2);
wall.shapeColor="white";
car.velocityX=speed;


          
}

function draw() {
  background(255,255,255);  
 
  
    
    deformation= 0.5*wieght*speed*speed/22500;
    if(deformation<100){
      car.shapeColor="green";
    }
    if(100<deformation){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }
    
 drawSprites();
}