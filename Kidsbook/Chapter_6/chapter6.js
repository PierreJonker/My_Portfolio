//if Statements

// let name = prompt (" What is your name ? ")
// alert("Hello " + name); 
// if (name.length > 7) {
//     alert ("Wow ! You have REALLY long name!");
// }else { // You add  IF ELSE statement so if the name isn't >7 it wil say your name isn't very long )
//     alert("Your name isn't very long!");
// }

// let lemonChicken = confirm("Chef , do you have lemon chciken?");
// let beefWithBlackBean = confirm("Chef , beef with black bean?");
// let sweetAndSourPork = confirm("Chef , do you have sweet and sour pork?");

// if (lemonChicken) {
//     alert(" Great! I'm having lemonChicken!");
// } else if (beefWithBlackBean) {
//     alert("I'm having the beef. ");
// }else if (sweetAndSourPork) {
//     alert("OK, I guess I'll the pork.");
// }else   {
//     alert("Well, I am having rice then");
// };


//Try it out!

// let name = prompt("What is your name?").toLowerCase();
// let mom = ("marina")
// let dad = ("gawie")
// let myName = ("pierre")

// if (name === mom) {
//     alert("Hi Mom!");
// }else if (name === dad) {
//     alert("Hi Dad!"); 
// }else if (name === myName) {
//     alert("Hi me!");
// }else { 
//     alert("Hi stranger!");

// }

//************LOOPS************

//************While Loop*******

//****** Can be used for more than one function *********////

//  let sheepCounted = 0; //**** You put here what you want the while loop to count for this example but can use for allot more *******/
//  while (sheepCounted < 10 ) {
//     console.log(" I have counted " + sheepCounted + " sheep! ");
//      sheepCounted++;  //*****Use to end While Loop if you don't the loop won't stop *********/
//  }

//  console.log("Zzzzzzzzzzzzzz!");


//****** FOR LOOP **********/ [Can only use it for n limited things .]


// for (let sheepCounted = 0; sheepCounted < 10 ; sheepCounted++)  {
//     console.log(" I have counted " + sheepCounted + " sheep! ");

// }

// console.log("Zzzzzzzzzzzzzz!");



// let timeToSayHello = 3;
// for (let i = 0; i < timeToSayHello; i++) {
//     console.log(" Hello! ")
// }




//********For loop with array and string ******///

// let animals = ["Lion", "Flamingo", "Polr Bear", "Boa Constrictor" ];

// for (let i = 0; i < animals.length; i++) {
// console.log(animals[i]);

//  } 


// ******* #2 *******

// // ****** Can also use it at prompt then they will show ther names letter ******* //

// let name = prompt(" What is your name ?");

// for (let i =0; i < name.length ; i++) {
// console.log(" Your name contains letter " + name[i] + ".");

// }

// ******* #3 MATH with *2 *******

//console.log("***** Power of 2 *****")
// for (let x = 2; x < 10000; x *= 2 ) {
// console.log(x);

// }


// ******* #4 MATH with *3  TRY IT OUT !! *******

// console.log("***** Power of 3 *****")
// for (let x = 3; x < 10000; x *= 3 ) {
// console.log(x);

// }


// ***** Programming Challenges *****//

// console.log(" #1 ")

// let animals = ["Cat", "Fish", "Lemur" , "Komdo Dragon" ]

// for (let i =0; i < animals.length ; i++ ){
// (animals[i] = "Awesome " + animals[i])

// }
// console.log(animals)

// // console.log(" #2 ")

// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = " ";
// let i = 0;

// while  ( i < 6) {
// randomString += alphabet[Math.floor(Math.random() * alphabet.length)]
// i++;

// }
// console.log(randomString);



// console.log(" #3 ")

let input = prompt("Enter a word");
let  output = "";

for (let i = 0; i < input.length; i ++) {
if (input [i] === "a") {
    output += "4";
} else if (input [i] === "e"){
    output += "3";
} else if (input [i] === "i"){
    output += "1";
}else if (input [i] === "o"){
    output += "0";
} else {
    output += input[i]
}

}

alert(output);



