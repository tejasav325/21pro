var canvas,b1,b2,b3,b4,ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
b1=createSprite(0,580,360,30);
b1.shapeColor="red";
b2=createSprite(295,580,200,30);
b2.shapeColor="green"
b3=createSprite(515,580,200,30);
b3.shapeColor="pink";
b4=createSprite(740,580,220,30);
b4.shapeColor="yellow";

    //create box sprite and give velocity
    ball=createSprite(random(20,700),100,40,40);
    ball.shapeColor="white";
    ball.velocityX=4;
    ball.velocityY=6;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
ball.bounceOff(edges);

if(b1.isTouching(ball)){
    ball.shapeColor="red"
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop()
}
if(b2.isTouching(ball)&& ball.bounceOff(b2)){
    ball.shapeColor="green"
}
if(b3.isTouching(ball)&& ball.bounceOff(b3)){
    ball.shapeColor="pink"
    
}
if(b4.isTouching(ball)&& ball.bounceOff(b4)){
    ball.shapeColor="yellow"
    music.play();
}

drawSprites()
    //add condition to check if box touching surface and make it box
}
