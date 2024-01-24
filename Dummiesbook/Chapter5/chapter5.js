document.getElementById("myName").innerHTML += "2005";

let item1;
let item2;
let item3;

document.getElementById("changeList").onclick = newList;

function newList () {
 item1 = prompt(" Enter a new first thing ");
 item2 = prompt(" Enter a new second thing ");          // Allow user to change his things he like 
 item3 = prompt(" Enter a new third thing ");
 updateList();
}

function updateList () {
    document.getElementById("firstThing").innerHTML =item1
    document.getElementById("secondThing").innerHTML =item2     // Created a new function to update the list on HTML by usiing this
    document.getElementById("thirdThing").innerHTML =item3      // function by calling it newList function ****
}
