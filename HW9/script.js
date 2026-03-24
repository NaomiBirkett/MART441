$(document).ready(function(){

let posterWidth = 800;
let posterHeight = 500;

//image system
let images = ["imgs/Spring-trees.jpg", "imgs/Summer-trees.jpg", "imgs/Fall-trees.webp", "imgs/Winter-trees.png"];
let imgIndex = 0;

function changeImage(){
    $("#posterImage").fadeOut(1000, function(){

        imgIndex++;
            if(imgIndex >= images.length){
                imgIndex = 0;
            }

            $("#posterImage").attr("src", images[imgIndex]);

            $("#posterImage").css({
                left: Math.random() * (posterWidth - 200),
                top: Math.random() * (posterHeight - 200)
            });

            $("#posterImage").fadeIn(1000);
        });
    }

setInterval(changeImage, 3000);

//text system
let texts = [
    "There is light in every season",
    "Change is natural",
    "Darkness will pass",
    "Stay hopeful for what's to come",
    "You will overcome"
];

let textIndex = 0;

function changeText(){
    textIndex++;
    if(textIndex >= texts.length){
        textIndex = 0;
    }

    $("#textBox").text(texts[textIndex]);

    $("#textBox").animate({
        left: Math.random() * (posterWidth - 200),
        top: Math.random() * (posterHeight - 200)
    }, 1000);
}

setInterval(changeText, 4000);

//shape system
let shapes = ["circle", "square", "triangle"];
let shapeIndex = 0;

function changeShape(){
    shapeIndex++;
    if(shapeIndex >= shapes.length){
        shapeIndex = 0;
    }

    $("#shape").removeClass();
    $("#shape").addClass(shapes[shapeIndex]);

    $("#shape").animate({
        left: Math.random() * (posterWidth - 200),
        top: Math.random() * (posterHeight - 200)
    }, 1000);

}

setInterval(changeShape, 2500);

});