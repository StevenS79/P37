var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  //read game state from database
  readState=database.ref('gameState');
  readState.on("value",function(data)){
    gameState=data.val();
  
    if(gameState!="Hungry"){
      feed.hide();
      addFood.hide();
      dog.remove();
    }

}

