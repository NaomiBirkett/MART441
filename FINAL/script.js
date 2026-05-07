const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

canvas.style.backgroundColor = 'grey';

// player
const player = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 20,
    color: 'blue',
    speed: 20
};

function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.size, player.size);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// player movement
function movePlayer(key) {
    if (key === 'w') { 
        if (player.y - player.speed >= 0) {
            player.y -= player.speed;
        }
    } 
    
    else if (key === 'a') { 
        if (player.x - player.speed >= 0) {
            player.x -= player.speed;
        }
    } 
    
    else if (key === 's') {
        if (player.y + player.size + player.speed <= canvas.height) {
            player.y += player.speed;
        }
    } 
    
    else if (key === 'd') { 
        if (player.x + player.size + player.speed <= canvas.width) {
            player.x += player.speed;
        }
    }
}


window.addEventListener('keydown', (event) => {
    movePlayer(event.key);
});




// collectibles
const collectibles = [];
const numCollectibles = 5;

for (let i = 0; i < numCollectibles; i++) {
    collectibles.push({
        x: Math.random() * (canvas.width - 10) + 5,
        y: Math.random() * (canvas.height - 10) + 5,
        size: 10,
        color: 'yellow'
    });
}


function drawCollectibles() {
    collectibles.forEach(collectible => {
     
        ctx.shadowColor = 'yellow';
        ctx.shadowBlur = 15;

        ctx.fillStyle = collectible.color;
        ctx.beginPath();
        ctx.arc(collectible.x, collectible.y, collectible.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
    });
}


function checkCollisions() {
    for (let i = collectibles.length - 1; i >= 0; i--) {
        const collectible = collectibles[i];
        const dx = player.x + player.size / 2 - collectible.x;
        const dy = player.y + player.size / 2 - collectible.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.size / 2 + collectible.size) {
            collectibles.splice(i, 1);
            score += 5;
        }
    }
}




//score
let score = 0;
function drawScore() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Score: ${score}`, 10, 20);
}




//level
let level = 1;
function drawLevel() {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'right'; 
    ctx.fillText(`Level: ${level}`, canvas.width - 10, 20);
}

function checkLevelProgress() {
    if (collectibles.length === 0) {
        if (level >= 10) {
            drawWinScreen();
            return; 
        }

        level += 1;
        for (let i = 0; i < numCollectibles; i++) {
            collectibles.push({
                x: Math.random() * (canvas.width - 10) + 5,
                y: Math.random() * (canvas.height - 10) + 5,
                size: 10,
                color: 'yellow'
            });
        }
        const currentObstacleCount = obstacles.length;
        for (let i = 0; i < currentObstacleCount; i++) {
            addObstacle(); 
        }

        if (level >= 5) {
            addPowerup();
        }
    }
}




// obstacles
const obstacles = [];


function addObstacle() {
    obstacles.push({
        x: Math.random() * (canvas.width - 20), 
        y: Math.random() * (canvas.height - 20),
        size: 20,
        color: 'red',
        speedX: Math.random() < 0.5 ? 0.5 : -0.5, 
        speedY: Math.random() < 0.5 ? 0.5 : -0.5 
    });
}


function moveObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.x += obstacle.speedX;
        obstacle.y += obstacle.speedY;

        if (obstacle.x <= 0 || obstacle.x + obstacle.size >= canvas.width) {
            obstacle.speedX *= -1;
        }
        if (obstacle.y <= 0 || obstacle.y + obstacle.size >= canvas.height) {
            obstacle.speedY *= -1;
        }
    });
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
    });
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function checkObstacleCollisions() {
    obstacles.forEach(obstacle => {
        if (
            player.x < obstacle.x + obstacle.size &&
            player.x + player.size > obstacle.x &&
            player.y < obstacle.y + obstacle.size &&
            player.y + player.size > obstacle.y
        ) {
            canvas.style.backgroundColor = getRandomColor();

            
            if (player.x < obstacle.x && player.x - player.speed >= 0) {
                player.x -= player.speed;
            } else if (player.x > obstacle.x && player.x + player.size + player.speed <= canvas.width) {
                player.x += player.speed;
            }

            if (player.y < obstacle.y && player.y - player.speed >= 0) {
                player.y -= player.speed;
            } else if (player.y > obstacle.y && player.y + player.size + player.speed <= canvas.height) 
                player.y += player.speed;
            
        }
    });
}




// powerups
const powerups = []; 

function addPowerup() {
    powerups.push({
        x: Math.random() * (canvas.width - 10) + 5,
        y: Math.random() * (canvas.height - 10) + 5,
        size: 15,
        color: 'lightgreen'
    });
}

function drawPowerups() {
    powerups.forEach(powerup => {
        ctx.shadowColor = 'green';
        ctx.shadowBlur = 15;

        ctx.fillStyle = powerup.color;
        ctx.beginPath();
        ctx.arc(powerup.x, powerup.y, powerup.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
    });
}

function checkPowerupCollisions() {
    for (let i = powerups.length - 1; i >= 0; i--) {
        const powerup = powerups[i];
        const dx = player.x + player.size / 2 - powerup.x;
        const dy = player.y + player.size / 2 - powerup.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < player.size / 2 + powerup.size) {
            powerups.splice(i, 1); 

            for (let j = 0; j < 10 && obstacles.length > 0; j++) {
                obstacles.pop();
            }

            score = Math.max(0, score - 10); 
        }
    }
}

addObstacle();




let gameStarted = false;

function drawTitleScreen() {
    clearCanvas();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('WARNING: Flashing lights!', canvas.width / 2, canvas.height / 2 - 110);

    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('All The Bright Spots', canvas.width / 2, canvas.height / 2 - 50);

    ctx.font = '20px Arial';
    ctx.fillText('Click Play to Start', canvas.width / 2, canvas.height / 2);

    ctx.fillStyle = 'blue';
    ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 + 30, 100, 40);

    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Play', canvas.width / 2, canvas.height / 2 + 60);

    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Can you beat level 10?', canvas.width / 2, canvas.height / 2 + 140);
}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (
        x >= canvas.width / 2 - 50 &&
        x <= canvas.width / 2 + 50 &&
        y >= canvas.height / 2 + 30 &&
        y <= canvas.height / 2 + 70
    ) {
        gameStarted = true;
        gameLoop();
    }
});

function mainLoop() {
    if (!gameStarted) {
        drawTitleScreen();
        requestAnimationFrame(mainLoop);
    }
}

mainLoop();

function gameLoop() {
    clearCanvas();
    drawPlayer();
    drawCollectibles();
    drawObstacles();
    drawPowerups();
    moveObstacles();
    checkCollisions();
    checkObstacleCollisions();
    checkPowerupCollisions();
    checkLevelProgress();
    drawScore();
    drawLevel();
    requestAnimationFrame(gameLoop);
}

function drawWinScreen() {
    clearCanvas();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Congratulations!', canvas.width / 2, canvas.height / 2 - 50);
    ctx.fillText('You Beat the Game!', canvas.width / 2, canvas.height / 2);

    highScore = Math.max(highScore, score);
    ctx.font = '20px Arial';
    ctx.fillText(`High Score: ${highScore}`, canvas.width / 2, canvas.height / 2 + 100);

    ctx.fillStyle = 'blue';
    ctx.fillRect(canvas.width / 2 - 75, canvas.height / 2 + 30, 150, 50);

    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Play Again', canvas.width / 2, canvas.height / 2 + 60);
}

canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (
        !gameStarted &&
        x >= canvas.width / 2 - 50 &&
        x <= canvas.width / 2 + 50 &&
        y >= canvas.height / 2 + 30 &&
        y <= canvas.height / 2 + 70
    ) {
        gameStarted = true;
        gameLoop();
    }

    if (
        gameStarted &&
        x >= canvas.width / 2 - 75 &&
        x <= canvas.width / 2 + 75 &&
        y >= canvas.height / 2 + 30 &&
        y <= canvas.height / 2 + 80
    ) {
        
        score = 0;
        level = 1;
        collectibles.length = 0;
        obstacles.length = 0;
        powerups.length = 0;

        for (let i = 0; i < numCollectibles; i++) {
            collectibles.push({
                x: Math.random() * (canvas.width - 10) + 5,
                y: Math.random() * (canvas.height - 10) + 5,
                size: 10,
                color: 'yellow'
            });
        }

        addObstacle();
        gameStarted = true;
        gameLoop();
    }
});

let highScore = 0;