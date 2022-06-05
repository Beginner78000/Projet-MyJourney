import axios from "axios";
import jwtDecode from "jwt-decode";
import { getItem, addItem, removeItem } from "./LocaleStorage";

export function hasAuthenticated() {
  const token = getItem("MyJourneyToken");
  const result = token ? tokenIsValid(token) : false;

  if (false === result) {
    removeItem("MyJourneyToken");
  }

  return result;
}

export async function login(credentials) {
  const response = await axios.post(
    "http://localhost:3002/api/users/login", 
    credentials
  );
  
  const username = response.data.username;
  const token = response.data.accessToken;
  console.log(response);
  addItem("MyJourneyToken", token);
  addItem("MyJourneyPseudo", username);
  return true;
}

export async function register(credentials) {
  const response = await axios.post(
    "http://localhost:3002/api/users/register",
    credentials
  );
  console.log(response);
  return true;
}

// export async function account() {
//   const response = await axios.post("http://localhost:3002/api/account/profile", {
//     headers: { authorization: `Bearer ${token}` },
//   });
//   const token = response.data.authorization;
//   console.log(response);

//   addItem("MyJourneyToken", token);
//   return true;
// }

export async function searchDestination() {
  const response = await axios.get(
    "http://localhost:3002/api/destinations/search"
  );
  console.log(response);
  return true;
}

export function logout() {
  removeItem("MyJourneyToken");
}

function tokenIsValid(token) {
  const { exp: expiration } = jwtDecode(token);

  if (expiration * 1000 > new Date().getTime()) {
    return true;
  }

  return false;
}