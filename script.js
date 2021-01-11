let boxes = document.querySelectorAll(".box");
console.log(boxes);
// let playerRed = true;
// let playerBlue = true;
// let replay = document.querySelector(".reset");
// let entries = [];
// // Advice from David during class
// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].addEventListener("click", () => {
//         if (boxes[i].style.backgroundColor != "blue" && boxes[i].style.backgroundColor != "red") {
//             if (playerRed) {
//                 boxes[i].style.backgroundColor = "red";
//                 playerRed = false;
//                 playerBlue = false;
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player - Select Your Box!";
//             }
//             else {
//                 boxes[i].style.backgroundColor = "blue";
//                 playerRed = true;
//                 playerBlue = true;
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player - Select Your Box!";
//             }
//             console.log(boxes);
//             console.log(boxes[i].style.backgroundColor);
//             console.log([i]);
//             entries[i] = boxes[i].style.backgroundColor;
//             console.log(entries);
//             if (entries[0] == "red" && entries[1] == "red" && entries[2] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[0] == "red" && entries[4] == "red" && entries[8] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[0] == "red" && entries[3] == "red" && entries[6] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[1] == "red" && entries[4] == "red" && entries[7] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[2] == "red" && entries[5] == "red" && entries[8] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[2] == "red" && entries[4] == "red" && entries[6] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[3] == "red" && entries[4] == "red" && entries[5] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[6] == "red" && entries[7] == "red" && entries[8] == "red") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Red Player Wins!";
//             }
//             else if (entries[0] == "blue" && entries[1] == "blue" && entries[2] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player Wins!";
//             }
//             else if (entries[0] == "blue" && entries[4] == "blue" && entries[8] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "BluePlayer Wins!";
//             }
//             else if (entries[0] == "blue" && entries[3] == "blue" && entries[6] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player Wins!";
//             }
//             else if (entries[1] == "blue" && entries[4] == "blue" && entries[7] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player Wins!";
//             }
//             else if (entries[2] == "blue" && entries[5] == "blue" && entries[8] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player Wins!";
//             }
//             else if (entries[2] == "blue" && entries[4] == "blue" && entries[6] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player Wins!";
//             }
//             else if (entries[3] == "blue" && entries[4] == "blue" && entries[5] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player Wins!";
//             }
//             else if (entries[6] == "blue" && entries[7] == "blue" && entries[8] == "blue") {
//                 const mainHeading = document.querySelector("h1");
//                 mainHeading.textContent = "Blue Player Wins!";
//             }
//             else { 
                  
//             }
            
//         }
//     })
//     }
// replay.addEventListener("click", resetGrid);

// function resetGrid() {
//     if(confirm("Reset???")) {
//         location.reload();
//     }
// }
