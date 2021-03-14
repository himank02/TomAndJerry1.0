var bg, bgImg;
var cat, mouse, catImg1, catImg2, catImg3, mouseImg1, mouseImg2, mouseImg3;

function preload() {
   bgImg=loadImage("images/garden.png");
    
   //load the images here
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite(500,400);
    bg.addImage(bgImg);


    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
