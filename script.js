const boxes = document.querySelectorAll(".box");
console.log(boxes);

(function randomize() {
    boxes.forEach(image => {
        var random = Math.floor(Math.random() * boxes.length);
        image.style.order = random;
    });
})();

var boxOne = null;
var boxTwo = null;
var same1 = null;
var same2 = null;
var turnedOver = false;
var freezeBoxes = false;
var counter = 0;
var counterMatch = 0;


function turnBox () {
    if (freezeBoxes = false)
        return;
        else {
    if (this == boxOne)
        return;
        else {
    this.classList.add("turn");
    if (turnedOver != true) {
        turnedOver = true;
        boxOne = this;
        return;
    }

    boxTwo = this;
    freezeBoxes = true;
    turnedOver = false;
    counter = counter + 1;
    console.log(counter);
    const mainHeading = document.querySelector("h1");
    mainHeading.textContent = "Memory Game - You Have Attempted " + counter + " Matches and Achieved " + counterMatch + " Matches of Ten!";
    sameImage();
        }
    }
}

function sameImage() {
    var same1 = boxOne.dataset.index;
    var same2 = boxTwo.dataset.index;
    console.log(same1, same2);
    if (same1 == same2) {
        console.log("cardsMatch");
        lockBoxes();
        console.log(boxes);
        return;
    }
    else {
        console.log("cardsDontMatch");
        turnBoxOver();
        return;
    }
}

function turnBoxOver() {
    setTimeout(() => {
        console.log("turnBoxOver");
        boxOne.classList.remove("turn");
        boxTwo.classList.remove("turn");
        turnedOver = false;
        freezeBoxes = false;
        boxOne = null;
        boxTwo = null;
    }, 1000);
}

function lockBoxes() {
    console.log("lockBox");
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