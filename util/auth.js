import axios from "axios";

const API_KEY = "AIzaSyAJfG-Vllv-6W4YDbUMi3W4RSLBf2c_pOA";

// signIn:
//const BACKEND_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${API_KEY}`;

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log("tried to logged in:", response); // returns: {"_h": 0, "_i": 0, "_j": null, "_k": null}
  const token = response.data;
  return token; // returns undeifined.
}

export async function createUser(userDataObj) {
  console.log("util - auth - trying to create a user... DATA : ");
  console.log(userDataObj);
  return authenticate("signUp", userDataObj.email, userDataObj.password);
}

export async function loginUser(userDataObj) {
  console.log("auth.js - data:", userDataObj); // {"email": "test1@gmail.com", "password": "709709"}
  return authenticate(
    "signInWithPassword",
    userDataObj.email,
    userDataObj.password
  );
}
