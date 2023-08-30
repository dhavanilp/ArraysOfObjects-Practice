// WEB COLORS START

// HTML Variable for Output
let outputEl = document.getElementById("output");

// Load Color Data
let colorData;
let userData = loadUserArray();
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
    outputEl.appendChild(makeHTMLElement(i));
  }
  // Display Name and Family of All Colors
}

function favoriteColors() {
  // Show Favourite colors for the current user
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
  // Count Colors in Red/Pink Families
}

function familySearch() {
  // Display Name and Family of all Colors that Match a User Provided Family Name. Also Output a Count of Colors Found.
}

function startLetterSearch() {
  // Display Name of all Colors that Match a User Provided Starting Letter. Also Output a Count of Colors Found.
}

// MAKE A DIV ELEMENT WITH ADDITION PROPERTIES
function makeHTMLElement(index) {
  // Favourite button Element
  let buttonEl = document.createElement("button");
  buttonEl.innerHTML = "Favourite";
  buttonEl.dataset.index = index;

  buttonEl.addEventListener("click", favouriteButtonHandler);

  // Color display Text
  let colorSpanEl = document.createElement("span");
  colorSpanEl.innerHTML = `<div class = "array-objects">

  <p class = "innerEls"> Name: ${colorData[index].name}</p>
   <p class = "innerEls">Family: ${colorData[index].family} </p> 
   <p class = "innerEls">Brighness: ${colorData[index].brightness}</p>
   </div>`;

  // Create Div Element with Color Names and favourite Button
  let divEl = document.createElement("div");
  divEl.appendChild(colorSpanEl);
  divEl.appendChild(buttonEl);
  return divEl;
}

// EVENT LISTENER FOR THE "BACK TO LOGIN" BUTTON
document.getElementById("back").addEventListener("click", backButtonClicked);

function backButtonClicked() {
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].currentUser) {
      userData[i].currentUser = false;
    }
  }
  saveUserData();
}

function favouriteButtonHandler(e) {
  // Get the index of the Color in the Array where the favourite button was clicked
  let index = +e.target.dataset.index;
  console.log(index);
  appendFavourite(index);
  saveUserData();
}

// LOCAL STORAGE FUNCTIONS TO LOAD AND SAVE USERS ARRAY
function saveUserData() {
  // Save users to Local Storage
  localStorage.setItem("userData", JSON.stringify(userData));
}

function loadUserArray() {
  // Load userData from local Storage
  let userStr = localStorage.getItem("userArray");
  return JSON.parse(userStr);
}

function appendFavourite(index) {
  // Add the favourited color to the user's Favorite array
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].currentUser) {
      userData[i].favourites.push(colorData[index]);
      console.log(userData[i]);
    }
  }
  saveUserData();
}
