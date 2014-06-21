var Player = function(x,y){
    this.x = x;
    this.y = y;
    this.img = getImage("cute/CharacterCatGirl");
    this.points = 0;
};

Player.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-127);
    image(this.img, this.x, this.y, 70, 106);
};

Player.prototype.hop = function() {
    this.img = getImage("cute/CharacterCatGirl");
    
    this.y -= 5;
};

Player.prototype.fall = function() {
    this.img = getImage("cute/CharacterCatGirl");
    this.y += 5;
};

Player.prototype.moveRight = function() {
    this.img = getImage("cute/CharacterCatGirl");
    this.x +=5;
};

Player.prototype.moveLeft = function() {
    this.img = getImage("cute/CharacterCatGirl");
    this.x -=5;
};

var Gem = function(x,y) {
    this.x = x;
    this.y = y;
    this.img = getImage("cute/GemBlue");
};

Gem.prototype.draw = function() {
    image(this.img, this.x, this.y, 30, 50);
};

Player.prototype.checkForGem = function(gem)
    {
    if ((gem.x >= this.x && gem.x <= (this.x + 40)) &&
    (gem.y >= this.y && gem.y <= (this.y + 40))) {
        gem.x = 450;
        this.points++;
        }
};

var player = new Player(175, 250);

var gems = [];
    for (var i = 0; i < 179; i++) {  
    gems.push(new Gem(random(12, 364), 1000-i*100));
}

var score = function(){
  fill(255, 0, 0);
  text("Score: " + player.points, 11, 23);
};


// Game stuff
draw = function() {
    
    // static background
    background(188, 223, 247);
    for ( var i = 0; i < 9; i++ ) {
        image(getImage("cute/BrownBlock"), 50*i, 310, 50, 75);
    }
    // falling gems
    for (var i = 0; i < gems.length; i++) {
        gems[i].draw();
        player.checkForGem(gems[i]);
        gems[i].y += 1;
    }
  
    // Player
    
    if (keyIsPressed && keyCode === 38) {
        player.hop();
    } else {
        player.fall();
    }
    
    if (keyIsPressed && keyCode === 37) {
        player.moveLeft();
    }
    
    if (keyIsPressed && keyCode === 39) {
        player.moveRight();
    }
    
    // Scorekeeping
    // text displaying current score
      
    player.draw();
    score();
};
