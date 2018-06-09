// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    
    // One enenmies are off the canvas , they apeappear tandomly 
    // With different speeds
    if (this.x > 510){
        this.x = -50;
        this.speed = 100 + Math.floor(Math.random() * 500);
    };
    
    //See if coolisions bitween the player and enemies
    if (player.x < this.x + 80 &&
        player.x + 80 > this.x &&
        player.y < this.y + 60 &&
        60 + player.y > this.y){
        player.x = 200;
        player.y = 400;
     
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
var Player = function (x, y) {
    //Variables for the player to move x and y axis
    this.x = x;
    this.y = y;
    // The character of the player
    this.player = 'images/char-horn-girl.png';
};

// This  an update() of class Player 
Player.prototype.update = function(dt) {
    
};

// This one for renders the image of the user into game, render() and
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};


// a handleInput() method.
Player.prototype.handleInput = function (keyPress) {

    // move left on the x axis 
    if (keyPress == 'lt' && this.x > 0) {
        this.x -= 107;
    };

    // move right on the x axis
    if (keyPress == 'rt' && this.x < 400) {
        this.x += 107;
    };

    //  move upwards on the y axis 
    if (keyPress == 'up' && this.y > 0) {
        this.y -= 85;
    };

    // downwards on the y axis 
    if (keyPress == 'down' && this.y < 400) {
        this.y += 85;
    };

    // Once the user reaches water
    // reset starting position
    if (this.y < 0) {
        setTimeout(() => {
            this.x = 200;
            this.y = 400;
        }, 500);
    };
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemie
var allEnemies = [];

var enemyLocation = [60,150,220]; // location of the three enemies on y axis


//All Char of player
var allCharPlayer = ['char-boy.png','char-cat-girl.png','char-horn-girl.png','char-pink-girl.png','char-princess-girl.png'];
enemyLocation.forEach(function(location_Y) {
   enemyObj = new Enemy(0, location_Y, 200);
    allEnemies.push(enemyObj);
});

// Place the player object in a variable called player
var player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'lt',
        38: 'up',
        39: 'rt',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
