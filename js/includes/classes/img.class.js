//images
var Img = {};

/*
Img.mapSq1 = new Image();
Img.mapSq1.src = 'img/maps/map50Sq_1.png';
Img.mapSq2 = new Image();
Img.mapSq2.src = 'img/maps/map50Sq_2.png';
Img.mapSq3 = new Image();
Img.mapSq3.src = 'img/maps/map50Sq_3.png';
Img.mapSq4 = new Image();
Img.mapSq4.src = 'img/maps/map50Sq_4.png';
Img.mapSq5 = new Image();
Img.mapSq5.src = 'img/maps/map50Sq_5.png';
Img.mapSq6 = new Image();
Img.mapSq6.src = 'img/maps/map50Sq_6.png';
Img.mapSq7 = new Image();
Img.mapSq7.src = 'img/maps/map50Sq_7.png';
Img.mapSq8 = new Image();
Img.mapSq8.src = 'img/maps/map50Sq_8.png';
Img.mapSq9 = new Image();
Img.mapSq9.src = 'img/maps/map50Sq_9.png';
Img.mapSq10 = new Image();
Img.mapSq10.src = 'img/maps/map50Sq_10.png';
Img.mapSq11 = new Image();
Img.mapSq11.src = 'img/maps/map50Sq_11.png';

Img.mapTr1 = new Image();
Img.mapTr1.src = 'img/maps/map50Tr_1.png';
Img.mapTr2 = new Image();
Img.mapTr2.src = 'img/maps/map50Tr_2.png';
Img.mapTr3 = new Image();
Img.mapTr3.src = 'img/maps/map50Tr_3.png';
Img.mapTr4 = new Image();
Img.mapTr4.src = 'img/maps/map50Tr_4.png';
Img.mapTr5 = new Image();
Img.mapTr5.src = 'img/maps/map50Tr_5.png';

Img.mapCr1 = new Image();
Img.mapCr1.src = 'img/maps/map50Cr_1.png';
Img.mapCr2 = new Image();
Img.mapCr2.src = 'img/maps/map50Cr_2.png';
Img.mapCr3 = new Image();
Img.mapCr3.src = 'img/maps/map50Cr_3.png';
Img.mapCr4 = new Image();
Img.mapCr4.src = 'img/maps/map50Cr_4.png';
Img.mapCr5 = new Image();
Img.mapCr5.src = 'img/maps/map50Cr_5.png';

Img.mapHx1 = new Image();
Img.mapHx1.src = 'img/maps/map25Hx_1.png';
Img.mapHx2 = new Image();
Img.mapHx2.src = 'img/maps/map25Hx_2.png';
Img.mapHx3 = new Image();
Img.mapHx3.src = 'img/maps/map25Hx_3.png';
Img.mapHx4 = new Image();
Img.mapHx4.src = 'img/maps/map25Hx_4.png';
Img.mapHx5 = new Image();
Img.mapHx5.src = 'img/maps/map25Hx_5.png';
*/

Img.player = new Image();
Img.player.src = 'img/dino.png';

Img.getMapImageData = function(url) {
    var img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');

    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        imgData = ctx.getImageData(0,0,canvas.width,canvas.height);

        var currentInnerArray;
        var zeroesAndOnes = [];
        for(var p = 0, len = imgData.data.length; p < len; p+=4) {
            var r = imgData.data[p];
            var g = imgData.data[p+1];
            var b = imgData.data[p+2];

            // Each line is the pixel width * 4, (rgba), start a newline
            if (p % (imgData.width * 4) === 0) {
                currentInnerArray = [];
                zeroesAndOnes.push(currentInnerArray);
            }
            if ((r <255) || (g < 255) && (b<255)) {
                currentInnerArray.push(1); // black
            } else {
                currentInnerArray.push(0); // white = land
            }
        }

        Map.imgData = zeroesAndOnes;

    };

    img.src = url;

};
Img.chooseMap = function() {

    var number = ['50','50','50','25'];
    var types = ['Sq','Tr','Cr','Hx'];
    var amount = ['11','5','5','5'];

    getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var num1 = getRandomInt(0,3);
    var num2 = getRandomInt(1,amount[num1]);

    var srcString = 'img/maps/map'+number[num1]+types[num1]+'_'+num2+'.png';

    return srcString;

};

Img.map = new Image();
Img.map.src = Img.chooseMap();