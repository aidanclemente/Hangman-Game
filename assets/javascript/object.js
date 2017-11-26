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

		var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

		// COUNTERS
		var guessesRemain = 10;
		var wins = 0;
		var losses = 0;

	var words = {
		"winners" : ["steelers", "patriots", "cowboys", "raiders", 
					"seahawks", "packers", "broncos", "giants", 
					"bears", "dolphins", "jets", "rams", "colts", 
					"ravens", "redskins", "saints", "niners", 
					"buccaneers", "chiefs"];