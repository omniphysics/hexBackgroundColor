//Select the button and the body that will show the effect
const button = document.querySelector("button");
const body = document.querySelector("body");
// Select the span that will contain the hex codes
const hexValue = document.querySelector("#hex-value");
//Create the array that will contain the possible combination of the colors
const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

button / addEventListener("click", changeHex);

function changeHex() {
  let hex = "#";

  //We need to loop through the colors and return 6 random digits hence, why it is less than 6
  for (let i = 0; i < 6; i++) {
    //This gets the index
    let colorIndex = Math.floor(Math.random() * colors.length);
    //To get the item itself
    colorItem = colors[colorIndex];
    //Add the result to the hex
    hex += colorItem;
  }
  //Add the content to the hex
  hexValue.textContent = hex;
  //Add the style to the hex
  body.style.backgroundColor = hex;
}

// const button = document.querySelector("button");
// const body = document.querySelector("body");
// const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const value = document.querySelector("#hex-value");

// button.addEventListener("click", changeHex);

// function changeHex() {
//   let hex = "#";

//   for (let i = 0; i < 6; i++) {
//     const index = Math.floor(Math.random() * hexValues.length);
//     hex += hexValues[index];
//   }

//   value.textContent = hex;
//   body.style.backgroundColor = hex;
// }
