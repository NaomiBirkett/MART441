//class
class Slide {
    constructor(image, title, description, author, year) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.author = author;
        this.year = year;
    }
}

//objects
let slide1 = new Slide(
    "imgs/Amazon-Activism.webp",
    "Amazon Activism",
    "Alessandra Korap of the Munduruku tribe conducts a boat patrol on the Jamanxim River with Chief Juarez, 61, while monitoring illegal mining on Indigenous land in the Amazon. This is an example of indigenous women fighting for their land and the survival of the Amazon, which is vital to the environment and world we all live in.",
    "Lynsey Addario",
    2021
);

let slide2 = new Slide(
    "imgs/Capitol-Crawl.jpg",
    "Capitol Crawl",
    "A group of handicapped people led by 8-year-old Jennifer Keelan crawl up the steps of the U.S. Capitol in Washington, to draw support for a key bill pending in the House that would extend civil rights to disabled persons. The Capitol Crawl was instumental in pushing for the Americans With Disabilities Act.",
    "Jeff Markowitz/AP Photo",
    1990
);

let slide3 = new Slide(
    "imgs/Russia-LGBTQ.jpg",
    "LGBTQ+ Activism",
    "LGBTQ+ activists take part in a protest against amendments to Russia's Constitution and the results of a nationwide vote on constitutional reforms, in Moscow, Russia July 15, 2020. In 2023, Russia's Supreme Court effectively outlawed LGBTQ+ activism. LGBTQ+ activism is important to continue advocacy for the human rights of all people, regardless of their gender or sexual orientation.",
    "Shamil Zhumatov/REUTERS",
    2020
);

let slide4 = new Slide(
    "imgs/Selma-Montgomery-March.jpg",
    "The Selma to Montgomery March",
    "Civil Rights Movement Co-Founder Dr. Ralph David Abernathy and his wife Mrs. Juanita Abernathy march with their children and Dr. and Mrs. Martin Luther King on the front line, leading the Selma to Montgomery March in 1965. Despite violent push back that lead to the day of this march being known as Bloody Sunday, this march was a key event leading to the passage of the Voting Rights Act.",
    "Abernathy Family",
    1965
);

let slide5 = new Slide(
    "imgs/Suffrage-March.jpg",
    "Women's Suffrage",
    "The actress Hedwig Reicher posed as Columbia in front of the Treasury Building for the Woman Suffrage Parade in Washington, D.C., on March 3, 1913. The Woman Suffrage Parade drew attention to the cause of fighting for women's rights to vote in the United States.",
    "Library of Congress",
    1913
);

//slideshow function
let lastIndex = -1;
let slides = [slide1, slide2, slide3, slide4, slide5];

function showRandomSlide() {

    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * slides.length);
    } 
    while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    let slide = slides[randomIndex];

    document.getElementById("image").src = slide.image;
    document.getElementById("title").innerText = slide.title;
    document.getElementById("description").innerText = slide.description;
    document.getElementById("author").innerText = "Author: " + slide.author;
    document.getElementById("year").innerText = "Year: " + slide.year;
}

//display to UI
showRandomSlide();