import { BASE_URL } from "./base.js";
const container = document.querySelector(".container");
const url = new URLSearchParams(window.location.search);
const wrapper = document.querySelector(".wrapper");
const id = url.get("id");

async function getData(endpoint, id) {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}/${id}`);
    const data = await response.json();
    drawCard(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
  }
}
getData("suppliers", id);

function drawCard(data) {
  wrapper.innerHTML = "";
  wrapper.innerHTML = `
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.companyName}</h5>
    <p class="card-text">${data.contactTitle}</p>
    <p class="card-text">ADDRESS: ${data.address.city}, ${data.address.country}</p>
    <a href="index.html" class="btn btn-primary">Go back</a>
  </div>
</div>`;
}
