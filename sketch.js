var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
box1=createSprite(100,580,200,40);
box2=createSprite(300,580,200,40);
box3=createSprite(500,580,200,40);
box4=createSprite(700,580,200,40);
box1.shapeColor="red";
box2.shapeColor="green";
box3.shapeColor="yellow";
box4.shapeColor="blue";
    //create box sprite and give velocity
ball=createSprite(random(20,750),100,20,20);
ball.shapeColor="white";
ball.velocityX=3;
ball.velocityY=5;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
drawSprites();

    if(ball.isTouching(box1)&&ball.bounceOff(box1))
    {
     ball.shapeColor="red";
     music.play();
    }
    if(ball.isTouching(box2)&&ball.bounceOff(box2))
    {
     ball.shapeColor="green";
    }
    if(ball.isTouching(box3)&&ball.bounceOff(box3))
    {
     ball.shapeColor="yellow";
     music.stop();
     ball.velocityX=0;
    ball.velocityY=0;

    }
    if(ball.isTouching(box4)&&ball.bounceOff(box4))
    {
     ball.shapeColor="blue";
    }
}
