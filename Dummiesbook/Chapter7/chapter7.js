// //Modifying Douglas with JavaScript using css divs
// document.getElementById("lefteye").style.backgroundColor = "purple";
// document.getElementById("head").style.transform = "rotate(15deg)";
// document.getElementById("righteye").style.border = "4px yellow dotted";
// document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// document.getElementById("body").style.color = "#FF0000";
// document.getElementById("head").style.borderTop = "5px solid black";

// //own
// document.getElementById("head").style.transform = "rotate(-15deg)";
// document.getElementById("nose").style.borderRadius = "50%";
// document.getElementById("rightarm").style.backgroundColor = "green";
// document.getElementById("mouth").style.backgroundColor = "pink";

// Animasions 


let rightEye = document.getElementById("righteye");
let lefttEye = document.getElementById("lefteye");
let leftArm = document.getElementById("leftarm");
let nose = document.getElementById("nose");
rightEye.addEventListener("click", moveUpDown);
lefttEye.addEventListener("click", moveUpDown);
leftArm.addEventListener("click", moveRightLeft);
nose.addEventListener("click", moveLeftRight)

// document.getElementById("righteye").addEventListener("click",moveUpDown);

function moveUpDown(e) {
    let robotPart = e.target;
    let t = 0;
    let animasion = setInterval(frame, 100); // It is going to call the fram every 10ms 

    function frame() {
        robotPart.style.top = t + '%';
        t++;
        if (t === 20) {
            clearInterval(animasion);
        }
    }

}

function moveRightLeft(e) {
    let robotPart = e.target;
    let left = 0;
    let animasion = setInterval(frame, 100); // It is going to call the fram every 10ms 

    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 70) {
            clearInterval(animasion);
        }
    }

}


function moveLeftRight(e) {
    let robotPart = e.target;
    let nlr = 90;
    let animasion = setInterval(frame, 100); // It is going to call the fram every 10ms 

    function frame() {
        robotPart.style.left = nlr + '%';
        nlr--;
        if (nlr === 45) {
            clearInterval(animasion);
        }
    }

}









