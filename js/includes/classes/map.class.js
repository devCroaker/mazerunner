// Map Code
Map = function(x,y,height,width,img) {

    var self = Entity(x,y,height,width,img);
    self.imgData = Img.getMapImageData(self.img.src);

    self.draw = function () {

        ctx.save();

        var x = ( (self.x - player.x) + ctx.canvas.width/2 ) - self.width/2;
        var y = ( (self.y - player.y) + ctx.canvas.height/2 ) - self.height/2;

        var clipX = player.mapX - ( self.width/2 );
        var clipY = player.mapY - ( self.height/2 );

        ctx.drawImage(self.img,clipX,clipY,self.img.width,self.img.height,x,y,self.width,self.height);

        ctx.restore();

    };

    self.inWall = function (x,y,width,height) {

        var footprint = 0;

        for (var h = y-1; h < y+height-1; h++) {
            for (var w = x-1; w < x+width-1; w++) {
                footprint += Map.imgData[h][w];
            }
        }

        if (footprint > 0 ) {
            return true;
        }

    };

    return self;

};