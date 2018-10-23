var ctx = document.getElementById('ctx').getContext('2d');

var FRAMES = 50;
var INTERVAL = 1000 / FRAMES;
var frameCount = 0;
var MAP_WIDTH = 1604;
var MAP_HEIGHT = 1604;

var player;
var Map;

startNewGame = function(){

};

endGame = function() {

};

resizeCanvas = function () {

    var change_x = ctx.canvas.width - window.innerWidth;
    var change_y = ctx.canvas.height - window.innerHeight;
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    player.x = player.x-change_x;
    player.y = player.y-change_y;
    Map.x = Map.x-change_x;
    Map.y = Map.y-change_y;

};

update = function() {

    resizeCanvas();
    ctx.clearRect(0,0,Map.width,Map.height);
    Map.update();
    player.update();

};

// Program //
player = player(window.innerWidth/2,window.innerHeight/2,16,16,Img.player);
Map = Map(player.x,player.y,MAP_WIDTH,MAP_HEIGHT,Img.map);
startNewGame();
setInterval(update, INTERVAL);