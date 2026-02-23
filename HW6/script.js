var imageArray = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12"];

var blankImage = "imgs/Question.jpg";

var actualImages = [];

function printBlanks() {
    console.log("printBlanks() executed"); // Debug statement to verify onload event
    createRandomImageArray();

    for (var i = 0; i < imageArray.length; i++) {
        document.getElementById(imageArray[i]).src = blankImage;
    }

}

function createRandomImageArray() {
    var possibleImages = [
        "imgs/Blue-Polygon.jpg",
        "imgs/Blue-Square.jpg",
        "imgs/Egg.jpg",
        "imgs/Green-Star.jpg",
        "imgs/Heart.jpg",
        "imgs/Pink-Circles.jpg"
    ];

    var count = [0, 0, 0, 0, 0, 0];

    while (actualImages.length < 12) {
        var randomNumber = Math.floor(Math.random() * possibleImages.length);

        if (count[randomNumber] < 2) {
            actualImages.push(possibleImages[randomNumber]);
            count[randomNumber]++;
        }
    }
}

function flipImage(number) {
    document.getElementById(imageArray[number]).src = actualImages[number];
}