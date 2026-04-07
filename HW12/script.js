class Square{
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


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 250;
var y2 = 250;
var square1, square2;

drawSquare();


function drawSquare(){

  ctx.clearRect(0,0,800,600);
  square1 = new Square(x,y,20,20,"blue");
  ctx.fillStyle = square1.theColor;
  ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);

  square2 = new Square(x2,y2,50,50,"green");
  ctx.fillStyle = square2.theColor;
  ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}


$(document).ready(function(){
  $(this).keypress(function(event){
    getKey(event);
  });
});


function getKey(event)
{
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);
}


function getKey(event){

  var didCollide = hasCollided(square1, square2);
  var char = event.which || event.keyCode;
  var actualLetter = String.fromCharCode(char);


  if(!didCollide) {
    if(actualLetter == "w")
    {
        moveUp();
    }

    else if(actualLetter == "s")
    {
        moveDown();
    }

    else if(actualLetter == "a")
    {
        moveLeft();
    }

    else if(actualLetter == "d")
    {
        moveRight();
    }

    drawSquare();
    }
}

function moveUp() {
  if (y > 0) { 
    y -= 20;
  }
}

function moveDown() {
  if (y < canvas.height - 20) {
    y += 20;
  }
}

function moveLeft() {
  if (x > 0) {
    x -= 20;
  }
}

function moveRight() {
  if (x < canvas.width - 20) {
    x += 20;
  }
}


function hasCollided(object1, object2) {
  return !(
    ((object1.y + object1.height) < (object2.y)) ||
    (object1.y > (object2.y + object2.height)) ||
    ((object1.x + object1.width) < object2.x) ||
    (object1.x > (object2.x + object2.width))
  );
}

var square2Velocity = 2;
var backgroundColor = "white";

function animateSquare2() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (hasCollided(square1, square2)) {
    document.body.style.backgroundColor = "red";

    square1.setHeight(40);
    square1.setWidth(40);
    square2.setHeight(70);
    square2.setWidth(70);
    drawSquare();

    setTimeout(() => {
      document.body.style.backgroundColor = backgroundColor;
      square1.setHeight(20);
      square1.setWidth(20);
      square2.setHeight(50);
      square2.setWidth(50);
      drawSquare();
    }, 500);

    return;
  }

  x2 += square2Velocity;

  if (x2 <= 0 || x2 >= canvas.width - square2.theWidth) {
    square2Velocity = -square2Velocity;
  }

  drawSquare();

  requestAnimationFrame(animateSquare2);
}

animateSquare2();