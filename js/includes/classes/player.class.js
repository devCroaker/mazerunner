player = function (x,y,height,width,img) {

    var self = Entity(x,y,height,width,img);
    self.movingNorth = false;
    self.movingEast = false;
    self.movingSouth = false;
    self.movingWest = false;
    self.mapX = MAP_WIDTH/2;
    self.mapY = MAP_HEIGHT/2;
    self.spd = 2;
    self.bounce = 1;
    self.spriteAnimCounter = 0;
    self.directionMod = 0;

    self.draw = function() {

        var x = ( (self.x - player.x) + ctx.canvas.width/2 ) - self.width/2;
        var y = ( (self.y - player.y) + ctx.canvas.height/2 ) - self.height/2;

        var frameWidth = self.img.width/4;
        var frameHeight = self.img.height/4;

        	//draw down
        if(self.movingEast)	//right
            self.directionMod = 3;
        else if(self.movingWest)	//left
            self.directionMod = 1;
        else if(self.movingNorth)	//up
            self.directionMod = 2;
        else if(self.movingSouth)
            self.directionMod = 0;

        var walkingMod = Math.floor(self.spriteAnimCounter)%4;

        ctx.drawImage(self.img,
            walkingMod*frameWidth,self.directionMod*frameHeight,frameWidth,frameHeight,
            x,y,self.width,self.height
        );

    };

    self.updatePosition = function () {

        var bumping = self.validatePosition();

        if (bumping.north) {
            self.mapY += self.bounce;
        } else {
            if (self.movingNorth) {
                self.mapY -= self.spd;
            }
        }

        if (bumping.east) {
            self.mapX -= self.bounce;
        } else {
            if (self.movingEast) {
                self.mapX += self.spd;
            }
        }

        if (bumping.south) {
            self.mapY -= self.bounce;
        } else {
            if (self.movingSouth) {
                self.mapY += self.spd;
            }
        }

        if (bumping.west) {
            self.mapX += self.bounce;
        } else {
            if (self.movingWest) {
                self.mapX -= self.spd;
            }
        }

    };

    self.validatePosition = function() {

        var leftBumper = {x:self.mapX-(self.width/2),y:self.mapY-(self.height/4)};
        var rightBumper = {x:self.mapX+(self.width/2) ,y:self.mapY-(self.height/4)};
        var upBumper = {x:self.mapX-(self.width/4) ,y:self.mapY-(self.height/2)};
        var downBumper = {x:self.mapX-(self.width/4) ,y:self.mapY+(self.height/2)};
        var width = self.width/2;
        var height = self.height/2;

        var bumping = {north: false, east: false, south: false, west:false};
        if (self.mapX > self.width/2 && self.mapX < MAP_WIDTH-(self.width/2) && self.mapY > self.height/2 && self.mapY < MAP_HEIGHT-(self.height/2)) {
            if (Map.inWall(leftBumper.x, leftBumper.y, 1, height)) {
                bumping.west = true;
            }
            if (Map.inWall(rightBumper.x, rightBumper.y, 1, height)) {
                bumping.east = true;
            }
            if (Map.inWall(upBumper.x, upBumper.y, width, 1)) {
                bumping.north = true;
            }
            if (Map.inWall(downBumper.x, downBumper.y, width, 1)) {
                bumping.south = true;
            }
        }
        return bumping;

    };

    var super_update = self.update;
    self.update = function() {
        if (self.movingNorth || self.movingEast || self.movingSouth || self.movingWest) {
            self.spriteAnimCounter += 0.125;
        }
        self.updatePosition();
        super_update();
    };

    return self;

};