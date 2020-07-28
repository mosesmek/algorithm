var moving
var fixed
function setup() {
  
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 50);
  moving=createSprite(200,200,100,100)
}
function draw() {
  background("black");  
  drawSprites();
  moving.y=mouseY
  if (moving.x-fixed.x<moving.width/2+fixed.width/2
    && fixed.x-moving.x<moving.width/2+fixed.width/2
    &&fixed.y-moving.y<moving.height/2+fixed.height/2
    &&fixed.y-moving.y<moving.height/2+fixed.height/2){
      moving.shapeColor="indigo"
      fixed.shapeColor="maroon"
    }
  moving.x=mouseX

}