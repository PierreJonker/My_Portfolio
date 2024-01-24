/*console.log(99*123);
console.log("This is a long string".slice(0, 4));
console.log(true && true);
console.log(12345 + 56789);
console.log(22 + 33 + 44);
console.log(1000 - 17);
console.log(123 * 456);
console.log(12345 / 250);
console.log((1234 + 57) * 3 - 31 / 4);
console.log(8 / (1 + 3));
console.log((15 + 9) * 2); */

// let age = 12;
// console.log(age);
// age = 13
// console.log(age);

// let numberOfSiblings = 1 + 3 ;
// let numberOfCandies = 8 ;
// let i = numberOfCandies / numberOfSiblings;
// console.log(i);


// let secondsInAMinute = 60;
// let minutesInAnHour = 60;
// let secondsInAnHour = secondsInAMinute * minutesInAnHour ;

// let hoursInADay = 24 ; 
// let secondsinADay = secondsInAnHour * hoursInADay

// let daysInAYear = 365 ;
// let secondsAYear = daysInAYear * secondsinADay

// let age =18;
// let secondsinYourAge = secondsAYear *age;

// console.log("You are"+ secondsinYourAge + "seconds old")

// let highFives = 0 ;
// console.log(++highFives);
// console.log(++highFives);
// console.log(--highFives);

// let highFives = 0 ;
// console.log(highFives++); then the number will be added to 0 so the result would be 0
// console.log(highFives++);
// console.log(highFives--);

// let x =10;
// x += 5;
// console.log(x);

// let score = 10;
// score += 7;
// score -=3;
// console.log(score);

// let ballons = 100;
// ballons /=4
// console.log(ballons);


// let myAwsomeString = "Something Really awsome!!!"
// console.log(myAwsomeString).

let myThing = 5;
console.log(myThing);

// Srtring always in ""
myThing = "this is a string;" 
console.log(myThing);

let numberNine = 9;
let stringNine = "9";

console.log (numberNine + numberNine);
console.log (stringNine + stringNine);
console.log (stringNine + numberNine);

// getting is talking with my name and to add extra space is ""+
let gretting = "Hello";
let myNmae = "Nick"
console.log(gretting + " " + myNmae)


// Count the length of string
let len = "Supercalifragilisticexpialidocious".length;
console.log (len);

console.log ("Supercalifragilisticexpialidocious".length);

let word = "Supercalifragilisticexpialidocious".length;
console.log (word)


// Pick letter out start at 0 etc 
let myNamee = "Nick"
console.log(myNamee[0]);
console.log(myNamee[1]);
console.log(myNamee[2]);
console.log(myNamee[3]);
console.log(myNamee.length);

// This is code start allows at 0-etc to remove letter from word and put it together
let codeWord1 = "are";
let codeWord2 = "tubas";
let codeWord3= "unsafe";
let codeWord4 = "?!";

let code = codeWord1[1] + codeWord2 [1] + codeWord3[1] + codeWord4[1];

console.log (code);

let myOwn = codeWord1[0] + codeWord2 [0] + codeWord3[5] + codeWord4[0];

console.log (myOwn);

// MY OWN
let codeWord11 = "race";
let codeWord22 = "sea";
let codeWord33= "cake";
let codeWord44 = "eat";

let myCode2 = codeWord11[0] + codeWord22 [2] + codeWord33[0] + codeWord44[0];

console.log (myCode2);

// Remove x amound of words from a word slicing (cuting up strings) at consol.log (but in side isnt string it is veribal) and if extract is from 0-15 use one ekstra

let longString = "My long string is long";
console.log (longString.slice(3 , 14));

console.log (longString.slice(14 , 17));

console.log (longString.slice(0 , 2));

console.log (longString.slice( 17,22 ));

console.log (longString.slice(7));


// Changing Strings to All Capital or All Lowercase Letters must add behind toUpperCase() brakets it is made mefits 

// console.log ("hello there how are you doing?".toUpperCase());

// console.log ("hello there how are you doing?".toLowerCase());

// let sillyString = ("hELlo THERE, hOW ARE yOu doINg");
// console.log(sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase());


// BOOLEANS

// let javasciptIsCool = true;
// console.log(javasciptIsCool);

// let hadShower = confirm("Did you have a shower?");
// let hasBackPack = confirm("Do you have your backpack?");
// let goToSchool = hadShower && hasBackPack;
// alert( "Must I go to school?:"+ goToSchool);

// let studentName = prompt(" What is your name ? ")
// let hasApple = confirm(" Do you have a apple " + studentName + " ? " );
// let hasOrange = confirm(" Do you have orange " + studentName + " ? ");
// let goToSchool = hasApple || hasOrange;
// alert(studentName + " may go to school: " + goToSchool)

// let studentName = prompt(" What is your name ? ");
// let isWeekend = confirm(" Is it a weekend ? ");
// let needToShowerToday = !isWeekend
// alert (studentName + " needs to shower " + needToShowerToday );

// let studentName = prompt(" What is your name ? ");
// let isWeekend = confirm ( "Is it a weekend ");
// let hasApple = confirm(" Do you have a apple " + studentName + " ? " );
// let hasOrange = confirm(" Do you have orange " + studentName + " ? ");
// let hadShower = confirm("Did you have a shower ?");

// let goToSchool = ! isWeekend && hadShower && (hasApple || hasOrange);
// alert(" Should " + studentName +" go to school ? " + goToSchool );

// let height = prompt (" what is your height ? ");
// heightRestriction = 60;
// let allowed = height >= heightRestriction;
// alert("Allowed on ride: " + allowed);


// let height = prompt (" what is your height ? ");
// heightRestriction = 48;
// let allowed = height <= heightRestriction;
// alert("Allowed on ride: " + allowed);


// === is for same everything and == wil only look at the same number doens't mather what type it is 

// let mySecretNumber ="5";

// let cicoGuess = 3;

// console.log(cicoGuess === mySecretNumber);

// let harpoGuess = 7;

// console.log(mySecretNumber === harpoGuess);

// let grouchoGuess = 5;

// console.log(mySecretNumber === grouchoGuess);


// Own Try

// let age = prompt (" What is your Age ?");
// let ageRestriction = 13;
// let accompanied = confirm (" Are you accomanied by someone ");
// let allowed = age >= ageRestriction || accompanied;
// alert ("Allowed to watch the movie :" + allowed );


let myVariable = null;
console.log (myVariable);