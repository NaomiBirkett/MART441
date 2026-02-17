var readinessLevel = 0;

function updateReadiness(pointsEarned, message) {
    readinessLevel += pointsEarned;

    document.getElementById("scoreDisplay").innerHTML =
        "Readiness Level: " + readinessLevel;

    return message;
}


function resetReadiness() {
    readinessLevel = 0;

    var scoreDisplay = document.getElementById("scoreDisplay");
    if (scoreDisplay) {
        scoreDisplay.innerHTML = "Readiness Level: 0";
    }
}


function startGame() {
    var gameStarted = false;
    do {
        document.getElementById("startPage").classList.add("hidden");
        document.getElementById("mainContent").classList.remove("hidden");

        gameStarted = true;

    } while (!gameStarted);
}


function getOption1() {
    var answer = document.getElementById("option").value;
    var myQuestion = document.getElementById("question");

    if (answer === "get up") {
        document.getElementById("option").classList.add("hidden");
        document.getElementById("btnSubmit").classList.add("hidden");

        document.getElementById("option2").classList.remove("hidden");
        document.getElementById("btnSubmit2").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Kitchen.jpg";

        myQuestion.innerHTML = updateReadiness(2, "The early bird gets the worm. You head to the kitchen and look around. Would like to have coffee or tea with your breakfast?");

    } else if (answer === "go back to sleep") {
        document.getElementById("option").classList.add("hidden");
        document.getElementById("btnSubmit").classList.add("hidden");

        document.getElementById("option3").classList.remove("hidden");
        document.getElementById("btnSubmit3").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Alarm.jpg";

        myQuestion.innerHTML = updateReadiness(2,"Rest is important. You roll over, pull the covers over your head, and go back to sleep. Would you like to set an alarm, or just sleep?");

    } else {
        myQuestion.innerHTML = "Invalid answer. Please type 'get up' or 'go back to sleep'.";
    }  
}


function getOption2() {
    var answer = document.getElementById("option2").value;
    var myQuestion = document.getElementById("question");

    if (answer === "coffee") {
        document.getElementById("option2").classList.add("hidden");
        document.getElementById("btnSubmit2").classList.add("hidden");

        document.getElementById("option4").classList.remove("hidden");
        document.getElementById("btnSubmit4").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Coffee.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You pull out the coffee grounds from the cupboard and start making a drip coffee. Do you like your coffee black or with cream?");

    } else if (answer === "tea") {
        document.getElementById("option2").classList.add("hidden");
        document.getElementById("btnSubmit2").classList.add("hidden");

        document.getElementById("option5").classList.remove("hidden");
        document.getElementById("btnSubmit5").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Tea.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You pull out a cannister of tea leaves from the cupboard and get some hot water going. Would you like your tea unsweetened or with honey?");

    } else {
        myQuestion.innerHTML = "Invalid answer. Please type 'coffee' or 'tea'.";
    }  
}


function getOption3() {
    var answer = document.getElementById("option3").value;
    var myQuestion = document.getElementById("question");

    if (answer === "set an alarm") {
        document.getElementById("option3").classList.add("hidden");
        document.getElementById("btnSubmit3").classList.add("hidden");

        document.getElementById("option2").classList.remove("hidden");
        document.getElementById("btnSubmit2").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Kitchen.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You set an alarm for 1 hour. Being able to get a little extra shut eye is a good thing, but you don't want to sleep away your whole day. When your alarm goes off, you get up and head to the kitchen. Do you want coffee or tea with your breakfast?");

    } else if (answer === "just sleep") {
        document.getElementById("option3").classList.add("hidden");
        document.getElementById("btnSubmit3").classList.add("hidden");

        document.getElementById("option2").classList.remove("hidden");
        document.getElementById("btnSubmit2").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Kitchen.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You sleep away the morning. Life can be hard and not every day needs to be productive. When finally awake well-rested, you get up and head to the kitchen. Do you want coffee or tea to start your day?");

    } else {
        myQuestion.innerHTML = "Invalid answer. Please type 'set an alarm' or 'just sleep'.";
    }  
}


function getOption4() {
    var answer = document.getElementById("option4").value;
    var myQuestion = document.getElementById("question");

    if (answer === "black") {
        document.getElementById("option4").classList.add("hidden");
        document.getElementById("btnSubmit4").classList.add("hidden");

        document.getElementById("option6").classList.remove("hidden");
        document.getElementById("btnSubmit6").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Armchair.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You sit down in a cozy arm chair with a blanket in your lap and sip your warm beverage. A cat jumps up into your lap and you smile and enjoy your day. would you like to start over?");

    } else if (answer === "with cream") {
        document.getElementById("option4").classList.add("hidden");
        document.getElementById("btnSubmit4").classList.add("hidden");

        document.getElementById("option6").classList.remove("hidden");
        document.getElementById("btnSubmit6").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Armchair.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You sit down in a cozy arm chair with a blanket in your lap and sip your warm beverage. A cat jumps up into your lap and you smile and enjoy your day. would you like to start over?");

    } else {
        myQuestion.innerHTML = "Invalid answer. Please type 'black' or 'with cream'.";
    }  
}


function getOption5() {
    var answer = document.getElementById("option5").value;
    var myQuestion = document.getElementById("question");

    if (answer === "unsweetened") {
        document.getElementById("option5").classList.add("hidden");
        document.getElementById("btnSubmit5").classList.add("hidden");

        document.getElementById("option6").classList.remove("hidden");
        document.getElementById("btnSubmit6").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Armchair.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You sit down in a cozy arm chair with a blanket in your lap and sip your warm beverage. A cat jumps up into your lap and you smile and enjoy your day. would you like to start over?");

    } else if (answer === "honey") {
        document.getElementById("option5").classList.add("hidden");
        document.getElementById("btnSubmit5").classList.add("hidden");

        document.getElementById("option6").classList.remove("hidden");
        document.getElementById("btnSubmit6").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Armchair.jpg";

        myQuestion.innerHTML = updateReadiness(2, "You sit down in a cozy arm chair with a blanket in your lap and sip your warm beverage. A cat jumps up into your lap and you smile and enjoy your day. would you like to start over?");

    } else {
        myQuestion.innerHTML = "Invalid answer. Please type 'unsweetened' or 'honey'.";
    }  
}


function getOption6() {
    var answer = document.getElementById("option6").value;
    var myQuestion = document.getElementById("question");

    if (answer === "yes") {
        resetReadiness();
        
        document.getElementById("option6").classList.add("hidden");
        document.getElementById("btnSubmit6").classList.add("hidden");

        document.getElementById("option").classList.remove("hidden");
        document.getElementById("btnSubmit").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Morning.jpg";

        myQuestion.innerHTML = "It's morning. You emerge from a dream, wrapped warmly in your bed. A warm splash of sunlight shines through a crack in your bedroom curtains, and the early morning sounds of spring filter in through the window. You look at your phone and realize it's Saturday and you have no responsibilities today. Should you: get up or go back to sleep?";

    } else if (answer === "no") {
        document.getElementById("option5").classList.add("hidden");
        document.getElementById("btnSubmit5").classList.add("hidden");

        document.getElementById("option6").classList.remove("hidden");
        document.getElementById("btnSubmit6").classList.remove("hidden");

        document.getElementById("storyImage").src = "imgs/StockCake-Day.jpg";

        myQuestion.innerHTML = "Enjoy your day! :)";

    } else {
        myQuestion.innerHTML = "Invalid answer. Please type 'yes' or 'no'.";
    }  
}


