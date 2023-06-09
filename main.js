// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;
let userData = loadUsers();

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
  } else if (selection === "fav-colors") {
    favoriteColors();
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
    outputEl.innerHTML += `<div class = "array-objects">

    <p class = "innerEls"> Name: ${colorData[i].name}</p>
     <p class = "innerEls">Family: ${colorData[i].family} </p> 
     <p class = "innerEls">Brighness: ${colorData[i].brightness}</p>
     </div>`;
  }
  // Display Name and Family of All Colors
}

function favoriteColors() {
  outputEl.innerHTML = "";
}

function brightColors() {
  outputEl.innerHTML = "";
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].brightness > 200) {
      outputEl.innerHTML += `<div class = "array-objects"> <p> Name: ${colorData[i].name}</p>
      <p>Family: ${colorData[i].family} </p> </div>`;
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
  outputEl.innerHTML = `<div class = "array-objects">The number of colors in the Pink/Red families is : ${count}</div>`;
  // Count Colors in Red/Pink Families
}

function familySearch() {
  outputEl.innerHTML = "";
  let userFamily = prompt("input the family you want to search by");
  for (let i = 0; i < colorData.length; i++) {
    if (colorData[i].family === userFamily) {
      outputEl.innerHTML += `<div class = "array-objects"> Name: ${colorData[i].name}. Family: ${colorData[i].family}</div>`;
    }
  }
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
  outputEl.innerHTML = `<div class = "array-objects">Start Letter Search</div>`;
}

function saveUsers() {
  // Save colors to Local Storage
  localStorage.setItem("userData", JSON.stringify(userData));
}
function loadUsers() {
  // Load Colors from Local Storage
  let userStr = localStorage.getItem("userData");
  return JSON.parse(userStr) ?? [];
}
