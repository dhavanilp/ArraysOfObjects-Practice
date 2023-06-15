// Control GUI changes

// HTML Variables
let signInDiv = document.getElementById("sign-in-div");
let signUpDiv = document.getElementById("sign-up-div");
let signInLink = document.getElementById("sign-in-link");
let signUpLink = document.getElementById("sign-up-link");

// Sign In Link Clicked
signInLink.addEventListener("click", displaySignIn);

function displaySignIn() {
  signUpDiv.style.display = "none";
  signInDiv.style.display = "block";
}

// Sign Up Link Clicked
signUpLink.addEventListener("click", displaySignUp);

function displaySignUp() {
  signInDiv.style.display = "none";
  signUpDiv.style.display = "block";
}

// Verificatioin Code
// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById("sign-in-btn");
let signUpBtn = document.getElementById("sign-up-btn");
let userArray = loadUsers();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener("click", signUpHandler);

function signUpHandler() {
  let signUpUser = document.getElementById("signUpUser").value;
  let signUpPassword = document.getElementById("signUpPassword").value;
  let signUpConfirm = document.getElementById("confirmSignUp").value;

  // Check to make sure each input field is filled

  if (signUpUser === "" || signUpPassword === "" || signUpConfirm === "") {
    alert("Make sure all input fields are filled");
  } else {
    // Check to see if user is already present, if not, allow sign up
    let userIndex = findUserIndex(signUpUser);
    if (userIndex === -1) {
      if (signUpPassword === signUpConfirm) {
        userArray.push(newUser(signUpUser, signUpConfirm));
        alert("User Added");
      } else {
        console.log("Confirm password doesn't match");
      }
    } else {
      alert("Username already in use");
    }
  }
  saveUsers();
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener("click", signInHandler);

function signInHandler() {
  let signInUser = document.getElementById("signInUser").value;
  let signInPassword = document.getElementById("signInPassword").value;
  let userIndex = findUserIndex(signInUser);

  // Check User name and password, If all mathc, then allow sign in
  if (userIndex === -1) {
    alert("Invalid Username");
  } else if (signInPassword !== userArray[userIndex].password) {
    alert("Wrong Password");
  } else if (signInPassword === userArray[userIndex].password) {
    document.getElementById("btn-link").href = "user.html";
  }
}

function saveUsers() {
  // Save users to Local Storage
  localStorage.setItem("userArray", JSON.stringify(userArray));
}
function loadUsers() {
  // Load users from local Storage
  let userStr = localStorage.getItem("userArray");
  return JSON.parse(userStr) ?? [];
}
function newUser(userName, userPassword) {
  return {
    username: userName,
    password: userPassword,
    favourites: [],
  };
}

// Search userArray for a user with the provided username
// Return -1 if not found, else return first index where found
function findUserIndex(username) {
  for (let i = 0; i < userArray.length; i++) {
    // IF username exists in array, return index, else return -1
    if (userArray[i].username === username) {
      return i;
    }
  }
  return -1;
}
