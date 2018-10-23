// Controls //
document.addEventListener("mousemove", function(mouse) {

    //var rect = document.getElementById('ctx').getBoundingClientRect();

    //player.pointer.x = mouse.clientX - rect.left;
    //player.pointer.y = mouse.clientY - rect.top;

});

document.onclick = function(){



};

document.addEventListener('contextmenu', function(mouse) {



});

document.addEventListener("keydown", function(e) {

    if (e.key === 'w') {
        player.movingNorth = true;
    }
    if (e.key === 'd') {
        player.movingEast = true;
    }
    if (e.key === 's') {
        player.movingSouth = true;
    }
    if (e.key === 'a') {
        player.movingWest = true;
    }

});

document.addEventListener("keyup", function(e) {

    if (e.key === 'w') {
        player.movingNorth = false;
    }
    if (e.key === 'd') {
        player.movingEast = false;
    }
    if (e.key === 's') {
        player.movingSouth = false;
    }
    if (e.key === 'a') {
        player.movingWest = false;
    }

});