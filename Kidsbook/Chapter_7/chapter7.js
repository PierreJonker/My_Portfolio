let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake",
    "truck",
    "code",
    "college"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remainingLetters = word.length * 2;
let guess;
let chances  = word.length;

while (remainingLetters > 0 && chances  > 0) {
    alert("Your Progress :    " + answerArray.join(" "));
    alert("You have " + chances  + " left. ");
    guess = prompt("Please enter one letter, or click Cancel to EXIT.");

    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter.");
    } else {
        guess = guess.toLowerCase();
        chances --;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("You have already guessed letter: " + guess);
                    break;
                }

            }
        }

    }
}

if (guess === null) {
    alert("Sorry you to see you leave. The anser was: " + word);
} else if (remainingLetters === 0) {
    alert("Your Final Result :     " + answerArray.join(" "));
    alert("Good Job!");
} else if (chances  === 0) {
    alert("Sorry you ran out of guesses!");
} else {
    alert("Something went wrong!!!");
}