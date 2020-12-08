var bullet, wall, speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  
 speed=random(223,321);
 weight=random(30,52);
 thickness=random(22,83);

  bullet=createSprite(50, 200, 35, 20);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=(80, 80, 80);
}

function draw() {
  background(255);  

  bullet.velocityX=speed;

  var deformation=0.5*weight*speed*speed/thickness*thickness*thickness;

  if(bullet.x-wall.x<bullet.width/2+wall.width/2
    &&
    wall.x-bullet.x<bullet.width/2+wall.width/2){
      bullet.velocityX=0;

      if(deformation<10){
        bullet.shapeColor="green";
      }
     
      if(deformation>10||deformation<180){
        bullet.shapeColor="red";
      }
     
      
      bullet.x=wall.x-50;

    }
 
  
  

  drawSprites();
}