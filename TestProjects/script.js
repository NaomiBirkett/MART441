let blankImages = [];

let actualImages = [
  "images/img1.png",
  "images/img1.png",
  "images/img2.png",
  "images/img2.png",
  "images/img3.png",
  "images/img3.png",
  "images/img4.png",
  "images/img4.png",
  "images/img5.png",
  "images/img5.png",
  "images/img6.png",
  "images/img6.png"
];

let board = document.getElementById("gameBoard");

for (let i = 0; i < 12; i++) {
  blankImages.push("images/blank.png");
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temp;
  }
}

shuffle(actualImages);

for (let i = 0; i < blankImages.length; i++) {

  let img = document.createElement("img");
  img.src = blankImages[i];
  
  img.setAttribute("data-index", i);

  img.addEventListener("click", revealImage);

  board.appendChild(img);
}

function revealImage() {
  let index = this.getAttribute("data-index");

  this.src = actualImages[index];
}