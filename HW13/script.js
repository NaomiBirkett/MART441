//Obstacles class
class Obstacle{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setColor(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
}


let obstacles = [];


function drawObstaclesFromJSON(jsonData) {
    obstacles = jsonData.map(data => new Obstacle(data.x, data.y, data.height, data.width, data.color));
    obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.theColor;
        ctx.fillRect(obstacle.theX, obstacle.theY, obstacle.theWidth, obstacle.theHeight);
    });
}


fetch('obstacles.json')
    .then(response => response.json())
    .then(data => drawObstaclesFromJSON(data))
    .catch(error => console.error('Error loading obstacles:', error));


//Player class
class Player{
    constructor(x, y, height, width, color)
    {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.color = color;
    }
  
    setX(x)
    {
       this.x = x;
    }
    setY(y)
    {
       this.y = y;
    }
    setHeight(height)
    {
       this.height = height;
    }
    setWidth(width)
    {
       this.width = width;
    }
    setColor(color)
    {
        this.color = color;
    }
    get theX()
    {
        return this.x;
    }
    get theY()
    {
        return this.y;
    }
    get theHeight()
    {
        return this.height;
    }
    get theWidth()
    {
        return this.width;
    }
    get theColor()
    {
        return this.color;
    }
}


//Collectible class
class Collectible {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }

    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setSize(size) {
        this.size = size;
    }
    setColor(color) {
        this.color = color;
    }
    get theX() {
        return this.x;
    }
    get theY() {
        return this.y;
    }
    get theSize() {
        return this.size;
    }
    get theColor() {
        return this.color;
    }
}


let collectibles = [];


function drawCollectiblesFromJSON(jsonData) {
    collectibles = jsonData.map(data => new Collectible(data.x, data.y, data.size, data.color));
    collectibles.forEach(collectible => {
        ctx.fillStyle = collectible.theColor;
        ctx.beginPath();
        ctx.arc(collectible.theX, collectible.theY, collectible.theSize, 0, Math.PI * 2);
        ctx.fill();
    });
}


fetch('collectibles.json')
    .then(response => response.json())
    .then(data => drawCollectiblesFromJSON(data))
    .catch(error => console.error('Error loading collectibles:', error));



let score = 0;

function updateScore() {
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
        scoreElement.textContent = score;
    }
}

function checkCollectibleCollision() {
    collectibles.forEach((collectible, index) => {
        if (
            player.theX < collectible.theX + collectible.theSize &&
            player.theX + player.theWidth > collectible.theX - collectible.theSize &&
            player.theY < collectible.theY + collectible.theSize &&
            player.theY + player.theHeight > collectible.theY - collectible.theSize
        ) {
            
            score += 1;
            collectibles.splice(index, 1); 
            updateScore(); 
        }
    });
}


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 20;
var y = 20;
var x2 = 250;
var y2 = 250;
var player;


drawPlayer();


function drawPlayer() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.theColor;
        ctx.fillRect(obstacle.theX, obstacle.theY, obstacle.theWidth, obstacle.theHeight);
    });

    collectibles.forEach(collectible => {
        ctx.fillStyle = collectible.theColor;
        ctx.beginPath();
        ctx.arc(collectible.theX, collectible.theY, collectible.theSize, 0, Math.PI * 2);
        ctx.fill();
    });

    if (player) {
        player.setX(x);
        player.setY(y);
    } else {
        player = new Player(x, y, 20, 20, "pink");
    }

    ctx.fillStyle = player.theColor;
    ctx.fillRect(player.theX, player.theY, player.theWidth, player.theHeight);

    checkCollectibleCollision(); // Check for collisions with collectibles
}


//Player movement
$(document).ready(function(){
  $(this).keypress(function(event){
    getKey(event);
  });
});

function didCollide(player, obstacle) {
    return !(
        (player.theY + player.theHeight < obstacle.theY) ||
        (player.theY > obstacle.theY + obstacle.theHeight) ||
        (player.theX + player.theWidth < obstacle.theX) ||
        (player.theX > obstacle.theX + obstacle.theWidth)
    );
}

function isCollisionFree(newX, newY) {
    const tempPlayer = new Player(newX, newY, player.theHeight, player.theWidth, player.theColor);
    for (const obstacle of obstacles) {
        if (didCollide(tempPlayer, obstacle)) {
            return false;
        }
    }
    return true;
}

function getKey(event) {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);

    if (actualLetter == "w" && isCollisionFree(x, y - 20)) {
        moveUp();
    } else if (actualLetter == "s" && isCollisionFree(x, y + 20)) {
        moveDown();
    } else if (actualLetter == "a" && isCollisionFree(x - 20, y)) {
        moveLeft();
    } else if (actualLetter == "d" && isCollisionFree(x + 20, y)) {
        moveRight();
    }

    drawPlayer();
}

function moveUp() {
    if (y > 0 && isCollisionFree(x, y - 20)) {
        y -= 20;
    }
}

function moveDown() {
    if (y < canvas.height - 20 && isCollisionFree(x, y + 20)) {
        y += 20;
    }
}

function moveLeft() {
    if (x > 0 && isCollisionFree(x - 20, y)) {
        x -= 20;
    }
}

function moveRight() {
    if (x < canvas.width - 20 && isCollisionFree(x + 20, y)) {
        x += 20;
    }
}


