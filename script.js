const boxes = document.querySelectorAll(".box");
console.log(boxes);

let boxOne = "";
let boxTwo = "";
let turnedOver = false;
let freezeBoxes = false;
let counter = 0;
let counterMatch = 0;


function turnBox () {
    if (freezeBoxes = false)
        return;
        else {
    if (this === boxOne)
        return;
        else {
    this.classList.add("turn");
    if (turnedOver !== true) {
        turnedOver = true;
        boxOne = this;
        return;
    }


    boxTwo = this;
    freezeBoxes = true;
    counter = counter + 1;
    console.log(counter);
    sameImage();
        }
    }
}

function sameImage() {
    let same1 = boxOne.dataset.index;
    let same2 = boxTwo.dataset.index;
    console.log(same1, same2);
    if (same1 === same2) {
        lockBoxes();
        return;
    }
    else {
        turnBoxOver();
        return;
    }
}

function turnBoxOver() {
    setTimeout(() => {
        boxOne.classList.remove("turn");
        boxTwo.classList.remove("turn");
        turnedOver = false;
        freezeBoxes = false;
        boxOne = null;
        boxTwo = null;

    }, 1000);
}

function lockBoxes() {
    boxOne.removeEventListener("click", turnBox);
    boxTwo.removeEventListener("click", turnBox);
    turnedOver = false;
    freezeBoxes = false;
    boxOne = null;
    boxTwo = null;
    counterMatch = counterMatch + 1;
    console.log(counterMatch);
    const mainHeading = document.querySelector("h1");
    mainHeading.textContent = "Memory Game - You Have Attempted " + counter + " Matches and Achieved " + counterMatch + " Matches of Ten!";
}


boxes.forEach(image => image.addEventListener("click", turnBox));