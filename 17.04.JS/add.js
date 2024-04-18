import { BASE_URL } from "./base";

const companyName = document.querySelector("#company name");
const street = document.querySelector("#street");
const phone = document.querySelector("#phone");
const city = document.querySelector("#phone");
const country = document.querySelector("#country");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("test");
});
