// question 1 object
var questions = []; // Array to hold all of the questions
var q1Gif = new Image(); // Gif for question 1
q1Gif.src = "../TriviaGame/assets/images/q1.gif";
q1Gif.id = "gif";
var q1 = {
  numOfQuest: "1", // Property to be used for element ID and displaying question number
  question:
    "We'll start off with an easy one...What does the word below the Pokémon logo say?",
  choices: [
    // List of answer choices for question 1
    (choice1 = {
      description: "Trivia",
      correct: true // Putting the first answer as the correct answer to make my life easier... lol
    }),
    (choice2 = {
      description: "Begin",
      correct: false
    }),
    (choice3 = {
      description: "Catch em' All!",
      correct: false
    }),
    (choice4 = {
      description: "It doesn't mean anything...",
      correct: false
    })
  ],
  gif: q1Gif,
  imageDisplays: 2 // How many pokemon will display after answering the question correctly
};

// Question 2 object
var q2Gif = new Image();
q2Gif.src = "../TriviaGame/assets/images/q2.gif";
q2Gif.id = "gif";
var q2 = {
  numOfQuest: "2",
  question: "How many different evolutions does Eevee have?",
  choices: [
    (choice1 = {
      description: "8",
      correct: true
    }),
    (choice2 = {
      description: "6",
      correct: false
    }),
    (choice3 = {
      description: "9",
      correct: false
    }),
    (choice4 = {
      description: "7",
      correct: false
    })
  ],
  gif: q2Gif,
  imageDisplays: 2
};

// Question 3 object
var q3Gif = new Image();
q3Gif.src = "../TriviaGame/assets/images/q3.gif";
q3Gif.id = "gif";
var q3 = {
  numOfQuest: "3",
  question: "What was the first Pokémon Nintendo created?",
  choices: [
    (choice1 = {
      description: "Rhydon",
      correct: true
    }),
    (choice2 = {
      description: "Pikachu",
      correct: false
    }),
    (choice3 = {
      description: "Squirtle",
      correct: false
    }),
    (choice4 = {
      description: "Bulbasaur",
      correct: false
    })
  ],
  gif: q3Gif,
  imageDisplays: 1
};

// Question 4 object
var q4Gif = new Image();
q4Gif.src = "../TriviaGame/assets/images/q4.gif";
q4Gif.id = "gif";
var q4 = {
  numOfQuest: "4",
  question: "How many evil spirits are trapped in the Pokémon Spiritomb?",
  choices: [
    (choice1 = {
      description: "108",
      correct: true
    }),
    (choice2 = {
      description: "100",
      correct: false
    }),
    (choice3 = {
      description: "79",
      correct: false
    }),
    (choice4 = {
      description: "The amount is not known.",
      correct: false
    })
  ],
  gif: q4Gif,
  imageDisplays: 1
};

// Question 5 object
var q5Gif = new Image();
q5Gif.src = "../TriviaGame/assets/images/q5.gif";
q5Gif.id = "gif";
var q5 = {
  numOfQuest: "5",
  question: "Who is, the Team Rocket leader, Giovanni's son?",
  choices: [
    (choice1 = {
      description: "Silver",
      correct: true
    }),
    (choice2 = {
      description: "Red",
      correct: false
    }),
    (choice3 = {
      description: "Archer",
      correct: false
    }),
    (choice4 = {
      description: "Gary",
      correct: false
    })
  ],
  gif: q5Gif,
  imageDisplays: 1
};

// Question 6 object
var q6Gif = new Image();
q6Gif.src = "../TriviaGame/assets/images/q6.gif";
q6Gif.id = "gif";
var q6 = {
  numOfQuest: "6",
  question: "How many unqiue Pokémon type combinations currently exist?",
  choices: [
    (choice1 = {
      description: "171",
      correct: true
    }),
    (choice2 = {
      description: "18",
      correct: false
    }),
    (choice3 = {
      description: "324",
      correct: false
    }),
    (choice4 = {
      description: "188",
      correct: false
    })
  ],
  gif: q6Gif,
  imageDisplays: 2
};

// Question 7 object
var q7Gif = new Image();
q7Gif.src = "../TriviaGame/assets/images/q7.gif";
q7Gif.id = "gif";
var q7 = {
  numOfQuest: "7",
  question: "Which of these abilities double the Pokémon's attack stat?",
  choices: [
    (choice1 = {
      description: "Huge Power",
      correct: true
    }),
    (choice2 = {
      description: "Thick Club",
      correct: false
    }),
    (choice3 = {
      description: "Hustle",
      correct: false
    }),
    (choice4 = {
      description: "Download",
      correct: false
    })
  ],
  gif: q7Gif,
  imageDisplays: 1
};

// Question 8 object
var q8Gif = new Image();
q8Gif.src = "../TriviaGame/assets/images/q8.gif";
q8Gif.id = "gif";
var q8 = {
  numOfQuest: "8",
  question:
    "Which Pokémon is stated to be able to create a small black hole using its power?",
  choices: [
    (choice1 = {
      description: "Gardevior",
      correct: true
    }),
    (choice2 = {
      description: "Darkrai",
      correct: false
    }),
    (choice3 = {
      description: "Mew",
      correct: false
    }),
    (choice4 = {
      description: "Deoxys",
      correct: false
    })
  ],
  gif: q8Gif,
  imageDisplays: 1
};

// Question 9 object
var q9Gif = new Image();
q9Gif.src = "../TriviaGame/assets/images/q9.gif";
q9Gif.id = "gif";
var q9 = {
  numOfQuest: "9",
  question: "Which Pokémon is prized as a beacon for sailors?",
  choices: [
    (choice1 = {
      description: "Ampharos",
      correct: true
    }),
    (choice2 = {
      description: "Dragonair",
      correct: false
    }),
    (choice3 = {
      description: "Electivire",
      correct: false
    }),
    (choice4 = {
      description: "Voltorb",
      correct: false
    })
  ],
  gif: q9Gif,
  imageDisplays: 1
};

// Question 10 object
var q10Gif = new Image();
q10Gif.src = "../TriviaGame/assets/images/q10.gif";
q10Gif.id = "gif";
var q10 = {
  numOfQuest: "10",
  question: "How many Pokémon have more than 1 mega evolution?",
  choices: [
    (choice1 = {
      description: "2",
      correct: true
    }),
    (choice2 = {
      description: "3",
      correct: false
    }),
    (choice3 = {
      description: "1",
      correct: false
    }),
    (choice4 = {
      description: "4",
      correct: false
    })
  ],
  gif: q10Gif,
  imageDisplays: 2
};
questions.push(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10); // Pushing the questions into array 'questions'

var pokemonImgArr = []; // Array to hold the pokemon objects

var Unown1 = {
  // Object for a pokemon
  name: "unown1", // name for pokemon object to use later as an ID for img
  img: "../TriviaGame/assets/images/Unown1.png" // src to use later for the img src
};

var Unown2 = {
  name: "unown2",
  img: "../TriviaGame/assets/images/unown2.png"
};

var Umbreon = {
  name: "umbreon",
  img: "../TriviaGame/assets/images/Umbreon.png"
};

var Espeon = {
  name: "espeon",
  img: "../TriviaGame/assets/images/espeon.png"
};

var Rhydon = {
  name: "rhydon",
  img: "../TriviaGame/assets/images/rhydon.png"
};

var Spiritomb = {
  name: "spiritomb",
  img: "../TriviaGame/assets/images/spiritomb.png"
};

var Kingdra = {
  name: "kingdra",
  img: "../TriviaGame/assets/images/kingdra.png"
};

var Mudkip = {
  name: "mudkip",
  img: "../TriviaGame/assets/images/mudkip.png"
};
var Torchic = {
  name: "torchic",
  img: "../TriviaGame/assets/images/torchic.png"
};
var Mawile = {
  name: "mawile",
  img: "../TriviaGame/assets/images/mawile.png"
};
var Gardevoir = {
  name: "gardevoir",
  img: "../TriviaGame/assets/images/gardevoir.png"
};
var Ampharos = {
  name: "ampharos",
  img: "../TriviaGame/assets/images/ampharos.png"
};
var CharizardX = {
  name: "charizardX",
  img: "../TriviaGame/assets/images/charizardx.png"
};
var CharizardY = {
  name: "charizardY",
  img: "../TriviaGame/assets/images/charizardy.png"
};
pokemonImgArr.push(
  Unown1,
  Unown2,
  Umbreon,
  Espeon,
  Rhydon,
  Spiritomb,
  Kingdra,
  Mudkip,
  Torchic,
  Mawile,
  Gardevoir,
  Ampharos,
  CharizardX,
  CharizardY
); //Pushing all the pokemons into the array 'pokemonImgArr'

var pokeImg = 0; // A counter to know which pokemon(s) to display
var remainingTime = 150; // A counter for the remaining time to answer each question
var questionNum = 0; // A counter to know which index of the questions array to display
var rundown; // The setInterval variable set globally to be able to allow it to be accessed by other functions
var isCorrect = 0; //A counter to hold how many questions were answered correctly

// Event listener to begin the game!
$("#begin-btn").on("click", function(e) {
  $("#beginning-game").remove(); // Removes elements to make space for the questions
  $("#begin").remove();
  displayQuestion(); // Calls on 'displayQuestion' to display timer, question, and answerchoices
});

//Function that displays the question and adds the event listener for selecting an answer choice
function displayQuestion() {
  $("#next, #choices").empty();
  currentQuestion(); // Calls on function to display everything
  chooseAnswer(); // Adds an event listener to the answer choice buttons
}

//Function that displays the timer, question, and answerchoices
function currentQuestion() {
  //Creates a new div element to hold the question
  var quest = document.createElement("div");
  $(quest).attr({
    id: "q" // Gives the question element an ID
  });
  $(quest).html(
    questions[questionNum].numOfQuest + ". " + questions[questionNum].question
  );
  $("#question").html(quest); // Puts the div into the already made div with the 'question' ID

  var choices = []; // Declares a new array to hold the answer choices
  // A loop to copy all the answer choices into 'choices' array
  for (i = 0; i < questions[questionNum].choices.length; i++) {
    choices[i] = questions[questionNum].choices[i];
  }
  choices = shuffle(choices); // Shuffles the answer choices in 'choices' array
  var letter = ["A. ", "B. ", "C. ", "D. "]; // Creating a new array because I want the answer choices to be preceeded by a letter (A,B,C,D)
  // A Loop to display the answer choices
  for (var i = 0; i < choices.length; i++) {
    var answerChoice = document.createElement("button");
    $(answerChoice).attr({
      class: "answer-choice col-md-12",
      value: choices[i].correct //Gives each choices its property so later can be taken in by the event listener to see if the user choice was correct
    });
    $(answerChoice).html(letter[i] + choices[i].description);
    $("#choices").append(answerChoice);
  }
  // Starts off the timer by putting the 'remainingTime' variable into 'timeConverter' function (yes I stole it from the class activity)
  $("#timer").html(timeConverter(remainingTime));
  //Assigns the predeclared 'rundown' variable to a setInterval that counts down the timer
  rundown = setInterval(function() {
    if (remainingTime > 0) {
      remainingTime--;
      var time = timeConverter(remainingTime);
      $("#timer").html(time);
      //What happens if the user runs out of time
      if (remainingTime === 0) {
        questionOver("timeout"); // If user doesn't answer within the timeframe and 'remainingTime' hits 0 run the function 'questionOver' with the parameter "timeout" to let the function know what happen
        clearInterval(rundown); // clears the interval 'rundown'
      }
    }
  }, 1000);
}

// Function to shuffle an array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//Stolen timeConverter function from activity :)
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - minutes * 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}

//Function that should run if the user runs out of time, or answers a question. It takes the parameter to know what happen.
function questionOver(str) {
  // a switch case to run depending on what the parameter was...each case follows the same organization
  switch (str) {
    // Case for when the user runs out of time
    case "timeout":
      $("#timer").html("You ran out of time!"); // Displays what happens
      nextQuestion();
      break;
    // Case for when the user answers the question correctly
    case "correct":
      $("#timer").html("You are correct!!");
      break;
    // Case for when the user answers incorrectly
    default:
      $("#timer").html("You are wrong!");
      break;
  }

  $("#question").html(
    questions[questionNum].choices[0].description + "... is the correct answer."
  );
  $("#choices").html(questions[questionNum].gif);
}

//Function that adds the event listeners for the answer choices
function chooseAnswer() {
  $(".answer-choice").on("click", function(e) {
    // Use this.value to get the value of the button pressed either 'true' or 'false' (should be only 1 true question)
    switch (this.value) {
      // If the user choice had the value 'true'(the correct choice) runs this
      case "true":
        clearInterval(rundown); // Clears the interval 'rundown'
        questionOver("correct"); // Sent 'correct' into 'questionOver' function
        displayPokemon(questions[questionNum].imageDisplays); // sends the number of pokemons to display in 'displayPokemon'
        isCorrect++;
        nextQuestion();
        break;
      // When wrong
      default:
        clearInterval(rundown); //Clears the interval 'rundown'
        questionOver("wrong"); // sends 'wrong' into 'questionOver' function
        pokeImg += questions[questionNum].imageDisplays; // Adds to the number of pokeImg because since the user got the answer wrong the pokemons for that question will not display
        nextQuestion();
        break;
    }
  });
}

// Function that displays the pokemon taking the parameter of the numbers of pokemon for that question
function displayPokemon(num) {
  //Loop that displays each pokemon in the 'pokemonImgArr'
  for (var j = 0; j < num; j++) {
    var newPoke = document.createElement("img");
    // Gives each pokemon images their attributes so they can be modified in CSS
    $(newPoke).attr({
      id: pokemonImgArr[pokeImg].name,
      src: pokemonImgArr[pokeImg].img,
      alt: pokemonImgArr[pokeImg].name
    });
    $("#quiz-container").prepend(newPoke);
    pokeImg++; // adds the the counter to move through the 'pokemonImgArr' array
  }
}

function nextQuestion() {
  var nextDiv = document.createElement("div");
  var nextBtn = document.createElement("button");
  $(nextBtn).attr({
    id: "next-btn"
  });
  $(nextBtn).html("Next Question");
  var bulbasaur = document.createElement("img");
  $(bulbasaur).attr({
    id: "bulbasaur",
    src: "../TriviaGame/assets/images/bulbasaur.png"
  });
  $(nextDiv).append(nextBtn);
  $(nextDiv).append(bulbasaur);
  $("#next").html(nextDiv);

  questionNum++; // Adds 1 to the 'questionNum' to move along the 'questions' array
  remainingTime = 150;
  $(nextBtn).on("click", function(e) {
    if (questionNum < 10) {
      displayQuestion();
    } else {
      endGame(isCorrect);
    }
  });
}

function endGame(numCorrect) {
  $("#timer").html("<h2>You got " + numCorrect + "/10 correct!</h2>");
  $("#next").empty();
  var gif = document.createElement("img");
  $(gif).attr({
      id: "gif"
  });
  if (numCorrect < 5) {
    $("#question").html("You know Pokemon huh....");

    $(gif).attr({
      src: "../TriviaGame/assets/images/gifFail.gif",
    });
  } else if (numCorrect < 9) {
    $("#question").html(
      "Wow you do know a thing or two about Pokemon!"
    );
    $(gif).attr({
      src: "../TriviaGame/assets/images/gifDecent.gif"
    });
  } else if (numCorrect === 9) {
    $("#question").html(
      "Ouch! Just 1 question away from being a Pokemon Genius like me!"
    );
    $(gif).attr({
      src: "../TriviaGame/assets/images/gifOk.gif"
    });
  } else {
    $("#question").html(
      "I've been beat... Maybe you know even more than me..."
    );
    $(gif).attr({
      src: "../TriviaGame/assets/images/gifPerfect.gif"
    });
  }
  $("#choices").html(gif);
  var nextDiv = document.createElement("div");
  var nextBtn = document.createElement("button");
  $(nextBtn).attr({
    id: "restart-btn"
  });
  $(nextBtn).html("Restart Trivia!");
  var bulbasaur = document.createElement("img");
  $(bulbasaur).attr({
    id: "bulbasaur",
    src: "../TriviaGame/assets/images/bulbasaur.png"
  });
  $(nextDiv).append(nextBtn);
  $(nextDiv).append(bulbasaur);
  $("#next").html(nextDiv);
  $(nextBtn).on("click", function(e) {
    history.go(0);
  });
}
