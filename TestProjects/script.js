let stage = 1;

function handleInput() {
  let input = document.getElementById("userInput").value.toLowerCase();
  document.getElementById("userInput").value = "";

  let result = processChoice(stage, input);
  document.getElementById("storyText").innerHTML = result;
}

// Function with parameters and returns a value
function processChoice(currentStage, choice) {

  if (currentStage === 1) {
    if (choice === "enter") {
      stage = 2;
      updateScene("darkforest.jpg", "darkgreen");
      return "You walk into the forest. You see a PATH or a RIVER.";
    } else if (choice === "run") {
      stage = 6;
      updateScene("home.jpg", "lightblue");
      return "You run home safely. The adventure ends! Type RESTART to play again.";
    } else {
      return "Invalid choice. Please type ENTER or RUN.";
    }
  }

  else if (currentStage === 2) {
    if (choice === "path") {
      stage = 3;
      updateScene("cabin.jpg", "brown");
      return "You follow the path and find a CABIN or keep WALKING?";
    } else if (choice === "river") {
      stage = 4;
      updateScene("river.jpg", "lightblue");
      return "You approach the river. Do you SWIM or BUILD a raft?";
    } else {
      return "Invalid choice. Type PATH or RIVER.";
    }
  }

  else if (currentStage === 3) {
    if (choice === "cabin") {
      stage = 5;
      updateScene("treasure.jpg", "gold");
      return treasureCount();
    } else if (choice === "walking") {
      stage = 6;
      updateScene("lost.jpg", "gray");
      return "You get lost in the forest. Game over! Type RESTART to try again.";
    } else {
      return "Type CABIN or WALKING.";
    }
  }

  else if (currentStage === 4) {
    if (choice === "swim") {
      stage = 6;
      updateScene("water.jpg", "blue");
      return "The current is too strong! Game over! Type RESTART to try again.";
    } else if (choice === "build") {
      stage = 5;
      updateScene("raft.jpg", "orange");
      return treasureCount();
    } else {
      return "Type SWIM or BUILD.";
    }
  }

  else if (currentStage === 5 || currentStage === 6) {
    if (choice === "restart") {
      restartStory();
      return "You are standing at the edge of a mysterious forest. Do you ENTER or RUN?";
    } else {
      return "Type RESTART to play again.";
    }
  }
}

// Function that uses a loop and returns a value
function treasureCount() {
  let gold = 0;
  let count = 0;

  while (count < 5) {
    gold += 10;
    count++;
  }

  stage = 6;
  return "You found treasure! You collected " + gold + 
         " gold coins! You win! Type RESTART to play again.";
}

// Function that updates styles and images
function updateScene(imageName, bgColor) {
  document.getElementById("storyImage").src = imageName;
  document.body.style.backgroundColor = bgColor;
}

// Function to restart
function restartStory() {
  stage = 1;
  updateScene("forest.jpg", "lightgreen");
}