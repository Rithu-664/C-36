var database,gameState=0;
var game,player,form;
var playerCount=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
 
  game = new Game();
  game.gameState();
  game.play();
 
}

function draw(){
  background("white");

  if(playerCount>=4){
    game.update(1);
    console.log(playerCount);
  }
  
 
   
    drawSprites();
  
}
