//Global Variables
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
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

		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

		// COUNTERS
		var guessesRemain = 10;
		var wins = 0;
		var losses = 0;

		// Create an array of words
		var words = ["steelers", "patriots", "cowboys", "raiders", "seahawks", "packers", "broncos", "giants", "bears", "dolphins", "jets", "rams", "colts", "ravens", "redskins", "saints", "niners", "buccaneers", "chiefs"];

		var pics = ["steelers1.png"]

// Starts the game
startGame();

// get users guess and save it 
document.onkeyup = function(guess) {

	userGuess = guess.key.toLowerCase();
	document.getElementById('hide').innerHTML = "";

	// Checks if userGuess is a Letter
	if (letters.indexOf(userGuess) > -1) {

		// Checks if userGuess was already guessed
		if (guesssedLetters.indexOf(userGuess) > -1) {
			console.log(guesssedLetters);
			alert("Please enter a letter you haven't guessed");
		}

		//Checks if userGuess is inside the word
		else if (randomWord.indexOf(userGuess) > -1) {
				
			guesssedLetters.push(userGuess);
			console.log(guesssedLetters);

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

			// They guessed all the letters WIN
			if (underScore.indexOf("_") == -1) {
				wins++;
				document.getElementById('numWins').innerHTML = wins;
				setTimeout(function() {alert ("Congratulations! You WIN!!! The team was the " + randomWord + "!"); }, 50);
				setTimeout(function() {startGame(); }, 100);
			}
		} else {
			// if wrong push to wrong array
			wrongGuess.push(userGuess);
			guesssedLetters.push(userGuess);
			// Prints incorrect letters guessed to the DOM
			document.getElementById('lettersGuessed').innerHTML = wrongGuess.join(" ");
			// Updates guesses remaining
			guessesRemain--;
			document.getElementById('remainGuess').innerHTML = guessesRemain;

			// Ends the game and rests
			if (guessesRemain === 0) {
				alert("Oh NO you've run out of guesses!!!");
				alert("The team was the " + randomWord);
				losses++;
				document.getElementById('numLosses').innerHTML = losses;
				startGame();
			}
		};
	} else {
		alert("Please enter a letter");
	};
};

//Reset function
function startGame() {

	 guessesRemain = 10;
	 underScore = [];
	 guesssedLetters = [];
	 wrongGuess = [];

	index = Math.floor(Math.random() * words.length);
	randomWord = words.splice(index, 1).toString()

//==============TEST ==========================
console.log(randomWord);
console.log(guesssedLetters);

	// create underscores based on length of word
	for (let i = 0; i < randomWord.length; i++) {
		underScore.push('_');
	}

	document.getElementById('hide').innerHTML = "Press any letter to get started";

	// Writes the underscores to the DOM
	document.getElementById('wordToGuess').innerHTML = underScore.join(" ");
	// resets the number of guesses
	document.getElementById('remainGuess').innerHTML = guessesRemain;
	//resets incorrect letters guessed to the DOM
	document.getElementById('lettersGuessed').innerHTML = wrongGuess.join(" ");
};
