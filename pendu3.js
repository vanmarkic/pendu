words = ["hello", "coucou", "welcome"];

let solution = words[Math.floor(Math.random() * words.length)];
let reponseArr = [];
let keepPlaying = true;

for (i = 0; i < solution.length; i++) {
    reponseArr[i] = "_";
}

let remainingLetters = solution.length;
let playedLetters = [];

function isInArray(char, array){
    if (array.length == 0) return false;
    for (let i = 0; i < array.length; i++){
        if (array[i] == char){
            return true;
        }
    }
    return false;
}

while (remainingLetters > 0) {
    alert(reponseArr.join(" "));
    let guess = prompt("Take a guess");

    if (guess === null || guess.length !== 1) {
        alert('input min and max one letter');

    } else if (isInArray(guess, playedLetters) == true) {
        alert("Already tried this letter " + playedLetters);

    } else {
        for (j = 0; j < solution.length; j++) {
            if (guess == solution[j]) {
                reponseArr[j] = guess;
                playedLetters.push(guess);
                if (!isInArray(guess, reponseArr)){
                    remainingLetters--;
                }
                console.log(reponseArr);

    }

        else {
        for (j = 0; j < solution.length; j++) {
            if (guess == solution[j]) {

                reponseArr[j] = guess;

                playedLetters.push(guess);

                if (!isInArray(guess, reponseArr)){
                    remainingLetters--;
                }

                console.log(reponseArr);


                console.log(remainingLetters);
                
            }
        }
    }
}


    alert(reponseArr.join(" "));
    alert("vous avez trouvé le mot " + solution);