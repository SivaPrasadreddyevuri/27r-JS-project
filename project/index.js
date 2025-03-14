// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJwBBzrSnl1KUBLrI3R44wplakxK83zp8",
  authDomain: "r-js-96bce.firebaseapp.com",
  projectId: "r-js-96bce",
  storageBucket: "r-js-96bce.firebasestorage.app",
  messagingSenderId: "651768745906",
  appId: "1:651768745906:web:e65b7ef55d38ee44195eab",
  measurementId: "G-YZNTNY08FM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initializing Authentication 
const auth = getAuth(app);

let signup = document.getElementById("sign-up_Form");
let signin = document.getElementById("sign-in_Form");
let btn = document.getElementById("do_signin");
let btn2 = document.getElementById("do_signup");
let signup_title = document.getElementById("signup-title");
let signupEmailError = document.getElementById("signupEmail_err");
let signupPasswordError = document.getElementById("signupPassword_err");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

//Form Inputs
signupEmail.addEventListener("focus", () => {
  signupEmail.style.boxShadow = "0px 0px 25px yellow";
  signupEmail.style.border = "none";
  // signupEmailError.style.display="none"
});
signupEmail.addEventListener("blur", () => {
  signupEmail.style.boxShadow = "none";
  signupEmailError.style.display = "none";
});
signupPassword.addEventListener("focus", () => {
  signupPassword.style.boxShadow = "0px 0px 25px  brown";
  signupPassword.style.border = "none";
});
signupPassword.addEventListener("blur", () => {
  signupPassword.style.boxShadow = "none";
});
// Navigating operations:
btn.addEventListener("click", () => {
  signin.style.display = "inline";
  signup.style.display = "none";
  signup_title.style.display = "none";
});
btn2.addEventListener("click", () => {
  signin.style.display = "none";
  signup.style.display = "inline";
  signup_title.style.display = "inline-block";
});
// After form Submition
signup.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let email = signupEmail.value;
  let password = signupPassword.value;
  // Validation For Email
  let emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let emailvalid = emailpattern.test(signupEmail.value);
  if (!emailvalid) {
    signupEmailError.innerText = "invalid Email!";
    signupEmailError.style.color = "red";
  } else {
    signupEmailError.innerText = " ";
  }
  // Validation for Password
  let passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  let passwordValid = passwordPattern.test(signupPassword.value);

  if (!passwordValid) {
    signupPasswordError.innerText =
      "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    signupPasswordError.style.color = "red";
  } else {
    signupPasswordError.innerText = " ";
  }

  if (emailvalid && passwordValid) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((x) => {
        alert("Account Successfully Created");
        signin.style.display = "inline";
        signup.style.display = "none";
        signup_title.style.display = "none";
      })
      .catch((e) => {
        alert("Error Creating Account / Email Already Registered");
      });
  }
});
signin.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = e.target[0].value;
  let email = e.target[1].value;
  signInWithEmailAndPassword(auth, name, email)
    .then((x) => {
      alert("Login Sucessfully Done");
      location.replace("./homepage.html");
    })
    .catch((e) => {
      alert("Login Failed \n Your Email or Password is Incorrect \n Please try Again");
    });
});
