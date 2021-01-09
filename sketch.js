var canvas;
var music;
var jumpingbox; 
var surface1, surface2, surface3, surface4;
var edges;
var sd;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(750,600);

    //create 4 different surfaces

    surface1 = createSprite(100,590,150,13);
    surface1.shapeColor = "yellow";
    surface2 = createSprite(280,590,150,13);
    surface2.shapeColor = "green";
    surface3 = createSprite(460,590,150,13);
    surface3.shapeColor = "blue";
    surface4 = createSprite(650,590,150,13);
    surface4.shapeColor = "red";


    //create box sprite and give velocity

    jumpingbox = createSprite(350,70,20,20);
    jumpingbox.shapeColor = "white";
    jumpingbox.velocityX = 2;
    jumpingbox.velocityY = 2;

    sd = 0;

    edges = createEdgeSprites();

}

function draw() {
    background(rgb(169,169,169));
    

    jumpingbox.bounceOff(edges);
   

    if(jumpingbox.isTouching(surface1) && jumpingbox.bounceOff(surface1)){
        music.play();
        jumpingbox.shapeColor = "yellow";
        //jumpingbox.velocityX = 0;
        //jumpingbox.velocityY = 0;
        sd = sd+1;
    }
    
    if(jumpingbox.isTouching(surface2) && jumpingbox.bounceOff(surface2)){
        music.play();
        jumpingbox.shapeColor = "green";
       // jumpingbox.velocityX = 0;
        //jumpingbox.velocityY = 0;
    }

    if(jumpingbox.isTouching(surface3) && jumpingbox.bounceOff(surface3)){
        music.play();
        jumpingbox.shapeColor = "blue";
        //jumpingbox.velocityX = 0;
        //jumpingbox.velocityY = 0;
    }

    if(jumpingbox.isTouching(surface4) && jumpingbox.bounceOff(surface4)){
        music.play();
        jumpingbox.shapeColor = "red";
       // jumpingbox.velocityX = 0;
        //jumpingbox.velocityY = 0;
    }

    if(sd===2){
        music.stop();
        jumpingbox.velocityX = 0;
        jumpingbox.velocityY = 0;
    }


drawSprites();
    //add condition to check if box touching surface and make it box
}

//function IsTouching(o1,o2){
   // var w = o1.width/2+o2.width/2;
    //var h = o1.height/2+o2.height/2;

   //if(o1.x-o2.x<w && o2.x-o1.x<w && o1.y-o2.y<h && o2.y-o1.y){
      // jumpingbox.velocityX = (-1)*jumpingbox.velocityX;
      // jumpingbox.shapeColor = "yellow";
   //}
//}
