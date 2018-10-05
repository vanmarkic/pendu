let mots = [
    "foo",
    "monkey",
    "amazing",
    "pancake",
    "becode",
];

let solution = mots[Math.floor(Math.random() * mots.length)];

let reponse = [];
for (let i = 0; i < solution.length; i++) {
    reponse[i] = "_";
}
let remainingLetters = solution.length;

while (remainingLetters > 0) {
 
    alert(reponse.join(" "));

    let guess = prompt("Guess a letter, or click Cancel to stop playing." + "tters : " + );
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        for (let j = 0; j < solution.length; j++) {
            if (solution[j] === guess) {
                reponse[j] = guess;
                remainingLetters--;
                }
        }
    }

}

alert(reponse.join(" "));
alert("Good job! The answer was " + solution);