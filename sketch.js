var boy,boy_running



function preload(){
runningImage = loadAnimation("runner1.png","runner2.png","runner4.png");
}

function setup() {
 createCanvas(600,200);

boy = createSprite(50,160,20,50);
boy.addAnimation("running",boy_running);

boy.scale=0.5;


}

function draw() {
 background(180);

 drawSprite();
}