var playerName = prompt("What is your name?");

function storyStart(choice) {

    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;

    if (choice == 1 && answer1 == "Yes") {
        document.getElementById("story").innerHTML = playerName + " finds themselves in a dark room. A single shaft of light shines down from the ceiling and illuminates a cylindrical object sitting at the center of a small table.";
        document.getElementById("choice1").innerHTML = "Walk to the table";
        document.getElementById("choice2").innerHTML = "Leave the room";

    } else if (choice == 1 && answer1 == "Walk to the table") {
        document.getElementById("story").innerHTML = playerName + " stares down at a simple, generic jam jar. The jar is opaque with a cloth cover tied around the opening, obscurring the jar's contents.";
        document.getElementById("choice1").innerHTML = "Pick up the jar";
        document.getElementById("choice2").innerHTML = "Carefully pull off the top";

    } else if (choice == 1 && answer1 == "Pick up the jar") {
        document.getElementById("story").innerHTML = "The jar seems unnaturally heavy. " + playerName + " can feel something sloshing inside.";
        document.getElementById("choice1").innerHTML = "Pocket the jar";
        document.getElementById("choice2").innerHTML = "Carefully pull off the top";

    } else if (choice == 1 && answer1 == "Pocket the jar") {
        document.getElementById("story").innerHTML = "The jar weighs heavily in " + playerName + "'s pocket. It's probably just jam... right? It will go great on their toast for breakfast tomorrow morning! " + playerName + " turns around and walks out the door, whistling happily as they exit the room.";
        document.getElementById("choice1").innerHTML = "Start over?";
        document.getElementById("choice2").innerHTML = "The end.";

    } else if (choice == 2 && answer2 == "Carefully pull off the top") {
        document.getElementById("story").innerHTML = "As the cloth covering pulls back, a foul stench hits " + playerName + "'s nose. A gelatinous green goo begins to pour out of the top, far more than they could have believed would fit inside such an average sized jar.";
        document.getElementById("choice1").innerHTML = "Let go of the jar and back away";
        document.getElementById("choice2").innerHTML = "Examine the goo closer";

    } else if (choice == 1 && answer1 == "Let go of the jar and back away") {
        document.getElementById("story").innerHTML = "The table is knocked onto its side as a massive gelatinous ooze emerges from the jar and gathers itself in the center of the room. " + playerName + " takes a step back and their leg bumps against a small, plastic chair.";
        document.getElementById("choice1").innerHTML = "Pick up the chair";
        document.getElementById("choice2").innerHTML = "Run for the door";

    } else if (choice == 1 && answer1 == "Pick up the chair") {
        document.getElementById("story").innerHTML = playerName + " swings the chair towards the ooze and it hits with an unsatisfying glopping sound. A sizzling sound fills the room as the chair begins to disolve in the acidic goo. The ooze surges forward towards " + playerName + ".";
        document.getElementById("choice1").innerHTML = "Stand there like an idiot";
        document.getElementById("choice2").innerHTML = "Run for the door";

    } else if (choice == 2 && answer2 == "Run for the door") {
        document.getElementById("story").innerHTML = playerName + " throws open the door and runs out into the night and safety. As " + playerName + " leaves the gelatinous ooze behind, they sigh in relief and feel a little sad that it wasn't just jam in that jar. It could have made a great addition to their toast for breakfast tomorrow morning...";
        document.getElementById("choice1").innerHTML = "Start over?";
        document.getElementById("choice2").innerHTML = "The end.";

    } else if (choice == 2 && answer2 == "Examine the goo closer") {
        document.getElementById("story").innerHTML = "Disgusting, acidic goo oozes out and begins enveloping " + playerName + "'s arms. It's a gelatinous ooze! " + playerName + " has a brief moment to think fleetingly how delicious a nice jam would have been on their toast for breakfast tomorrow morning, before they become the ooze's breakfast and are no more.";
        document.getElementById("choice1").innerHTML = "Start over?";
        document.getElementById("choice2").innerHTML = "The end.";

    } else if (choice == 1 && answer1 == "Stand there like an idiot") {
        document.getElementById("story").innerHTML = "The ooze is upon " + playerName + ", and disgusting, acidic goo begins to ooze up their legs. " + playerName + " has a brief moment to think fleetingly how delicious a nice jam would have been on their toast for breakfast tomorrow morning, before they become the ooze's breakfast and are no more.";
        document.getElementById("choice1").innerHTML = "Start over?";
        document.getElementById("choice2").innerHTML = "The end.";

    } else if (choice == 2 && answer2 == "Leave the room") {
        document.getElementById("story").innerHTML = playerName + " walks away, and the adventure ends. It was probably just a jar of jam. " + playerName + " has always preferred butter on their toast, anyway.";
        document.getElementById("choice1").innerHTML = "Start over?";
        document.getElementById("choice2").innerHTML = "The end.";

    } else if (choice == 1 && answer1 == "Start over?") {
        document.getElementById("story").innerHTML = playerName + " finds themselves in a dark room. A single shaft of light shines down from the ceiling and illuminates a cylindrical object sitting at the center of a small table.";
        document.getElementById("choice1").innerHTML = "Walk to the table";
        document.getElementById("choice2").innerHTML = "Leave the room";

    } else if (choice == 2 && answer2 == "The end.") {
        document.getElementById("story").innerHTML = "Thank you for playing! :)";
        document.getElementById("choice1").innerHTML = "Start over?";
        document.getElementById("choice2").innerHTML = "The end.";

    } else if (choice == 2 && answer2 == "No") {
        document.getElementById("story").innerHTML = "Thank you for playing! :)";
        document.getElementById("choice1").innerHTML = "Start over?";
        document.getElementById("choice2").innerHTML = "The end.";
    }

}