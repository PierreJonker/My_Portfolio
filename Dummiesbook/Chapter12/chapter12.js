// Variables to store train speed and position, and animation reference
let trainSpeed = 100;
let trainPosistion = 0;
let animation;

// Get the train element and add a click event listener to speed it up
let train = document.getElementById("train");
train.addEventListener("click", speedUp)

// Get the stop button element and add a click event listener to stop the train
let stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

// Function to increase train speed on click
function speedUp() {
    // Ensure train speed does not go below 10
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    // Clear the previous animation interval and set a new one
    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);

    // Animation frame function to move the train and check its position
    function frame() {
        trainPosistion += 2;
        train.style.left = trainPosistion + 'px';
        checkPosition(trainPosistion);
    }
}

// Function to check the train position and handle a crash
function checkPosition(currentPosition) {
    if (trainPosistion === 410) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

// Function to stop the train and provide a message if it's not crashed
function stopTrain() {
    if (trainPosistion < 410) {
        clearInterval(animation);
        alert("Whew! That was close! ");
    }
}
