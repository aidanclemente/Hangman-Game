//Global Variables

		// key user pushes
		var userGuess = [];
		// letter not in word
		var wrongGuess = [];
		// all letters guessed
		var guesssedLetters = [];
		// blank array that underscores will be pushed to
		var underScore = [];
		// word user will be guessing
		var randomWord = "";
		var picHint = "";
		var letters = ["a", "b", "c", "d", 
					  "e", "f", "g", "h", 
					  "i", "j", "k", "l", 
					  "m", "n", "o", "p", 
					  "q", "r", "s", "t", 
					  "u", "v", "w", "x", 
					  "y", "z"]
		// COUNTERS
		var guessesRemain = 10;
		var wins = 0;
		var losses = 0;
		//NFL teams to choose from randomly
		var words = ["steelers", "patriots", "cowboys", "raiders", 
					"seahawks", "packers", "broncos", "giants", 
					"bears", "dolphins", "jets", "rams", "colts", 
					"ravens", "redskins", "saints", "niners", 
					"buccaneers", "chiefs"];
		//Pictures for hints
		var pics = ["assets/images/pittsburgh1.jpg", "assets/images/patriots.jpg", 
				   "assets/images/cowboys.jpg", "assets/images/raiders.jpg", 
				   "assets/images/seahawks.jpg", "assets/images/packers.jpg", 
				   "assets/images/broncos.jpg", "assets/images/giants.jpg", 
				   "assets/images/bears.png", "assets/images/dolphins.png", 
				   "assets/images/jets.jpg", "assets/images/rams.png", 
				   "assets/images/colts.png", "assets/images/ravens.png", 
				   "assets/images/redskins.png", "assets/images/saints.png", 
				   "assets/images/niners.gif", "assets/images/buccaneers.gif", 
				   "assets/images/chiefs.jpg"]

// Starts the game 
startGame();

// Starts music automatically 
window.onload = function() {
	document.getElementById("music").play();
	var music = document.getElementById("music");
	music.volume = 0.2;
};

//Picture for a Hint
document.getElementById("btn").addEventListener("click", function() {
	document.getElementById('newPic').src = picHint;
});

// Reset Button
document.getElementById("reset").addEventListener("click", function() {
	document.getElementById('newPic').src = "assets/images/nfl.jpg";
	startGame();
});

// Give Up Button
document.getElementById("quit").addEventListener("click", function() {
	document.getElementById('wordToGuess').innerHTML = randomWord;
});

// get userGuess and save it 
document.onkeyup = function(guess) {

	userGuess = guess.key.toLowerCase();
	document.getElementById('hide').innerHTML = "";

	// Checks if userGuess is a Letter
	if (letters.indexOf(userGuess) > -1) {

		// Checks if userGuess was already guessed
		if (guesssedLetters.indexOf(userGuess) > -1) {
			alert("Please enter a letter you haven't guessed");
		}

		//Checks if userGuess is inside the word
		else if (randomWord.indexOf(userGuess) > -1) {	

			guesssedLetters.push(userGuess);
			//Updates remaining number of guesses
			guessesRemain--;
			document.getElementById('remainGuess').innerHTML = guessesRemain;	
			// For Loop to replace underscore with letter
			for (var j = 0 ; j < randomWord.length; j++) {
				if (randomWord[j] === userGuess) {
					underScore[j] = userGuess;
				}
				document.getElementById('wordToGuess').innerHTML = underScore.join(" ");
			}
			winLose();
		} else {
			// if wrong push to wrong array
			wrongGuess.push(userGuess);
			guesssedLetters.push(userGuess);
			// Prints incorrect letters guessed to the DOM
			document.getElementById('lettersGuessed').innerHTML = wrongGuess.join(" ");
			// Updates guesses remaining
			guessesRemain--;
			document.getElementById('remainGuess').innerHTML = guessesRemain;
			winLose();
		};
	} else {
		alert("Please enter a letter");
	};
};

//Start/Reset function
function startGame() {

	 guessesRemain = 10;
	 underScore = [];
	 guesssedLetters = [];
	 wrongGuess = [];

	// Creates a random index number
	index = Math.floor(Math.random() * words.length);

	// Saves the word/picture stored at index and splices out index from pics and words arrays
	randomWord = words.splice(index, 1).toString();
	picHint = pics.splice(index, 1).toString();

	// create underscores based on length of word
	for (let i = 0; i < randomWord.length; i++) {
		underScore.push('_');
	}

	// Hides instructions
	document.getElementById('hide').innerHTML = "Press any letter to get started";
	// Writes the underscores to the DOM
	document.getElementById('wordToGuess').innerHTML = underScore.join(" ");
	// Resets the number of guesses
	document.getElementById('remainGuess').innerHTML = guessesRemain;
	// Resets incorrect letters guessed to the DOM
	document.getElementById('lettersGuessed').innerHTML = wrongGuess.join(" ");
};

// Guessed all the letters WIN/Run out of guesses loose Game resets
function winLose() {
	if (underScore.indexOf("_") == -1) {
		wins++;
		document.getElementById("clap").play();
		document.getElementById('numWins').innerHTML = wins;
		setTimeout(function() {alert ("Congratulations! You WIN!!! The team was the " + randomWord + "!"); }, 50);
		setTimeout(function() {startGame(); }, 100);
		setTimeout(function() {refresh(); }, 100);
	} else if (guessesRemain === 0) {				
		losses++;
		document.getElementById("fail").play();
		document.getElementById('numLosses').innerHTML = losses;
		setTimeout(function() {alert("Oh NO you've run out of guesses!!!"); }, 50);
		setTimeout(function() {alert ("The team was the " + randomWord + "!"); }, 50);
		setTimeout(function() {startGame(); }, 100);
		setTimeout(function() {refresh(); }, 100);
	};
};

//When the array is empty alert the user to refresh the page
function refresh() {
	if ((parseInt(wins) + parseInt(losses)) == 19) {
	alert("Great Job! You went through all of the teams!");
	alert("Refresh the page to play again!");
	};
};
