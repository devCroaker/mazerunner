Entity = function(x,y,height,width,img) {

    var self = {
        x: Math.floor(x),
        y: Math.floor(y),
        height: height,
        width: width,
        img: img
    };

    self.draw = function () {

        ctx.save();

        var x = ( (self.x - player.x) + ctx.canvas.width/2 ) - self.width/2;
        var y = ( (self.y - player.y) + ctx.canvas.height/2 ) - self.height/2;

        ctx.drawImage(self.img,0,0,self.img.width,self.img.height,x,y,self.width,self.height);

        ctx.restore();

    };

    self.update = function () {

        self.draw();

    };

    return self;

};