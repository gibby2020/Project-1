const boxes = document.querySelectorAll(".box");
console.log(boxes);

let boxOne = "null";
let boxTwo = "null";
let turnedOver = false;
let freezeBoxes = false;



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

    sameImage();
}
}
}
function sameImage() {
    let same1 = boxOne.dataset.index
    let same2 = boxTwo.dataset.index;
    console.log(same1, same2);
    if (same1 === same2)
        lockBoxes();
    else {
        turnBoxOver();
    }
}

function turnBoxOver() {
    setTimeout(() => {
        boxOne.classList.remove("turn");
        boxTwo.classList.remove("turn");
        turnedOver = false;
        freezeBoxes = false;
        boxOne = "null";
        boxTwo = "null";
    }, 1000);
}

function lockBoxes() {
    boxOne.removeEventListener("click", turnBox);
    boxTwo.removeEventListener("click", turnBox);
    turnedOver = false;
    freezeBoxes = false;
    boxOne = "null";
    boxTwo = "null";
}


boxes.forEach(image => image.addEventListener("click", turnBox));