// // Function //

// // *****#1 Firs way how to do it but let with have a problem can't call cuntion before you created the function*****
// // let ourFistFunction = function () {
// // console.log("Hello world!");
// // };

// ourFistFunction(); // ***** With this you call the function *****

// // ******#2 Use this fucntion more doesn't have a problem with let *******
// function ourFistFunction() {
//     console.log("Hello world!");
// }


// sayHelloTo("Pierre"); // Call Function here

// function sayHelloTo(name) {
//     console.log(" Hello " + name);
// }


// // CAT Function with a for loop in the function

// drawCats(15);

// function drawCats(howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " = ^.^ =");
//     }

// }


// ***** / Using this function to call two thiings ****** //
// function printMultiTime(howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }

// }


// printMultiTime(10, "<0#0>");


// function double (number) {
// return number*2;

// }

// console.log (double(3));

// console.log (double(2) + double(5));

// console.log (double(double(3)));




// function pickRandomWord (words) {
//    return words[Math.floor(Math.random()* words.length)];
// }


// //**** Random Insult Generator ****//

// function generateRandomInsult(){ 
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];


// let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + 
// pickRandomWord(randomAdjectives) + " " + pickRandomWord (randomWords) + "!!!";
// console.log(randomString);
// }

// generateRandomInsult();

// function fifthLetter (name) {
// if (name.length < 5) {
//     return ;
// }

// return"The fifth letter of your name is: " + name[4] + ".";
// }

// console.log(fifthLetter("Pierre"));



// function medalForScore(score) {

//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }
//     return "Gold";
// }

// let score = prompt("What is your score ?");
// alert(medalForScore(score));



// Programming Challenges //


function add(number1, number2) {
    return number1 + number2
}

function muliiply(number1, number2) {
    return number1 * number2
}

console.log(add(muliiply(36325, 9824), 777));


// Challege 2 //

function areArraysSame(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true
}

console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));


