// let solution = ["B", "O", "N", "J", "O", "U", "R"];



function guessLetter () {
	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	let solution = ["B", "O", "N", "J", "O", "U", "R"];
	let tentative = ["_", "_", "_", "_", "_", "_", "_"];
	let x = Math.floor(Math.random()*26);
	let proposal = alphabet[x];
	for (i = 0; i < solution.length; i++) {
		if (solution[i] === proposal) {
			//tentative.splice(i, 1, proposal);
			tentative[i] = proposal;
			console.log(tentative);
			}
		else {guessLetter();}
	}
}


var answerArray = [];

for (i = 0; i < solution.length; i++) {
  answerArray[i] = "_";
}


guessLetter();

// let guess = prompt('Pick a letter');

// guessLetter();






// {
// // function guessLetter () {
// // 	for (var i = solution.length - 1; i >= 0; i--) {
// // 		if (proposal == solution[i]) {tentative.splice(i, 1, proposal)};
// // 		else {guessLetter();}
// // 		}
// // 	}	
// // }




	

