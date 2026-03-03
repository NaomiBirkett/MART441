//welcome page code
function startGame() {

  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let age = document.getElementById("age").value.trim();

  let errorMessage = document.getElementById("errorMessage");

  if (firstName === "" || lastName === "" || age === "") {
    errorMessage.textContent = "All fields are required.";
    return;
  }

  if (isNaN(age)) {
    errorMessage.textContent = "Age must be a number.";
    return;
  }

  let player = {
    firstName: firstName,
    lastName: lastName,
    age: Number(age),
    attempts: 0
  };

  let playerString = JSON.stringify(player);

  localStorage.setItem("playerData", playerString);

  window.location.href = "index.html";
}


//game page code
let imageArray = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"];
let blankImage = "imgs/Question.jpg";
let actualImages = [];

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let matchesFound = 0;
let attempts = 0;

let player = JSON.parse(localStorage.getItem("playerData"));

function printBlanks() {
    console.log("printBlanks() executed"); // Debug statement to verify onload event
    createRandomImageArray();

    for (let i = 0; i < imageArray.length; i++) {
        document.getElementById(imageArray[i]).src = blankImage;
    }

}

function createRandomImageArray() {

    actualImages = [];

    let possibleImages = [
        "imgs/Blue-Polygon.jpg",
        "imgs/Blue-Square.jpg",
        "imgs/Egg.jpg",
        "imgs/Green-Star.jpg",
        "imgs/Heart.jpg",
        "imgs/Pink-Circles.jpg"
    ];

    let count = [0, 0, 0, 0, 0, 0];

    while (actualImages.length < 12) {
        let randomNumber = Math.floor(Math.random() * possibleImages.length);

        if (count[randomNumber] < 2) {
            actualImages.push(possibleImages[randomNumber]);
            count[randomNumber]++;
        }
    }
}


function flipImage(number) {

    if (lockBoard) return;

    let clickedCard = document.getElementById(imageArray[number]);

    if (clickedCard === firstCard) return;

    clickedCard.src = actualImages[number];

    if (!firstCard) {
        firstCard = clickedCard;
        firstCard.setAttribute("data-index", number);
    } 
    else {
        secondCard = clickedCard;
        secondCard.setAttribute("data-index", number);
        lockBoard = true;

        checkForMatch();
    }
}


function checkForMatch() {

  let firstIndex = firstCard.getAttribute("data-index");
  let secondIndex = secondCard.getAttribute("data-index");

  let isMatch = actualImages[firstIndex] === actualImages[secondIndex];

  attempts++;
  updateAttemptsDisplay();

  if (isMatch) {
    handleMatch();
  } else {
    handleNoMatch();
  }
}


function handleMatch() {

  matchesFound++;

  resetTurn();

  if (matchesFound === 6) {
    endGame();
  }
}


function handleNoMatch() {

  setTimeout(function() {

    firstCard.src = blankImage;
    secondCard.src = blankImage;

    resetTurn();

  }, 1000);
}


function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}


function updateAttemptsDisplay() {
  document.getElementById("attemptDisplay").textContent = attempts;
}


function endGame() {

  player.attempts = attempts;

  let updatedPlayer = JSON.stringify(player);

  localStorage.setItem("playerData", updatedPlayer);

  window.location.href = "results.html";
}


//results page
function loadResults() {

  let storedData = localStorage.getItem("playerData");

  if (!storedData) {
    document.body.innerHTML = "<h2>No game data found.</h2>";
    return;
  }

  let player = JSON.parse(storedData);

  document.getElementById("fullName").textContent =
    player.firstName + " " + player.lastName;

  document.getElementById("age").textContent = player.age;

  document.getElementById("attempts").textContent = player.attempts;
}


function playAgain() {

  let player = JSON.parse(localStorage.getItem("playerData"));

  player.attempts = 0;

  localStorage.setItem("playerData", JSON.stringify(player));

  window.location.href = "index.html";
}


function resetGame() {

  localStorage.clear();

  window.location.href = "intro.html";
}