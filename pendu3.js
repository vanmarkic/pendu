// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://od-api.oxforddictionaries.com/api/v1', true);



var Dictionary = require("oxford-dictionary-api");

var app_id = "5b563cea";

var app_key = "77115b6a45f6296ae089fdf88ebd3642";

var dict = new Dictionary(app_id,app_key);

dict.find("ace",function(error,data){ if(error) return console.log(error); console.log(data); });
request.onload = function () {
  // Begin accessing JSON data here
  }


// Send request
request.send();

// Begin accessing JSON data here
var data = JSON.parse(this.response);

if (request.status >= 200 && request.status < 400) {
  data.forEach(movie => {
    console.log(movie.title);
  });
} else {
  console.log('error');
}

    

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
                console.log(remainingLetters);
                
            }
        }
    }
}


    alert(reponseArr.join(" "));
    alert("vous avez trouvé le mot " + solution);