// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;

fetch("color-data.json")
  .then((rawData) => rawData.json())
  .then((data) => (colorData = data));

// Event Listener on Go Button
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

// Process Go Button Click
function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all-colors") {
    allColors();
  } else if (selection === "bright-colors") {
    brightColors();
  } else if (selection === "red-pink-families") {
    redPinkFamilies();
  } else if (selection === "family-search") {
    familySearch();
  } else if (selection === "start-letter-search") {
    startLetterSearch();
  }
}

// MENU FUNCTIONS
function allColors() {
  outputEl.innerHTML = "";
  for (let i = 0; i < colorData.length; i++) {
    outputEl.innerHTML += `<h3> Name: ${colorData[i].name}. Family: ${colorData[i].family}</h3>`;
  }
  // Display Name and Family of All Colors
}

function brightColors() {
  outputEl.innerHTML = "";
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness > 200) {
      outputEl.innerHTML += `<h3> Name: ${colorData[i].name}. Family: ${colorData[i].family}</h3>`;
    }
  }
  // Display Name and Brightness of All Colors with a Brightness of 200 and Higher
}

function redPinkFamilies() {
  let count = 0;
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === "Pink" || colorData[i].family === "Red") {
      count++;
    }
  }
  outputEl.innerHTML = `<h3>The number of colors in the Pink/Red families is : ${count}</h3>`;
  // Count Colors in Red/Pink Families
}

function familySearch() {
  outputEl.innerHTML = "";
  let userFamily = prompt("input the family you want to search by");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === userFamily) {
      outputEl.innerHTML += `<h3> Name: ${colorData[i].name}. Family: ${colorData[i].family}</h3>`;
    }
  }
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = "<h3>Start Letter Search</h3>";
}
