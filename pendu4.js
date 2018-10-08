words = ["python", "hello"];

let solution = words[Math.floor(Math.random() * words.length)].split('');

let solutionString = solution.join('');
// console.log(solutionString);
				
let reponseArr = [];
let reponseString = reponseArr.join('');
let keepPlaying = true;
let remainingLetters = solution.length;
let playedLetters = [];


// console.log(solution.length);


for (i = 0; i < solution.length; i++) {
    reponseArr[i] = "_";
}

function isInArray(char, array) {
    if (array.length == 0) return false;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == char) {
            return true;
        } else {
            return false;
        }
    }
}

function isInSolution(char, array) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] == char) {
            return true;
        } else {
            return false;
        }
    }
}




while (reponseString != solutionString) {
    alert(reponseArr.join(" "));

    let guess = prompt("Take a guess");

    if (guess === null || guess.length !== 1) {
        alert('input min and max one letter');
    };

    // check played letters
    if (isInArray(guess, playedLetters) == true && isInSolution(guess, solution) == false) {
        alert("Already played this letter" + playedLetters);
    } else if (isInArray(guess, playedLetters) == false && isInSolution(guess, solution) == true) {
        function addLetter() {
            for (let k = 0; k < solution.length; k++) {
                if (solution[k] === guess) {
                    reponseArr[k] = guess;
                }
            }
        }
        playedLetters.push(guess);
    } else {
        alert("erreur");
        playedLetters.push(guess);
    }
}


alert(reponseArr.join(" "));
alert("vous avez trouvé le mot " + solution);