// const arr = [{ id: 1 }];

// function g() {
//   return (promise = new Promise((resolve, reject) => {
//     if (arr.length == 0) {
//       return reject({
//         data: null,
//         message: "empty",
//       });
//     } else {
//       return resolve({
//         dataL: arr,
//         message: "success",
//       });
//     }
//   }));
// }

// function gPromise(callbackFn) {
//   callbackFn()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// gPromise(g);

// async function nAsync(callbackFn) {
//   let res = await callbackFn();
//   try {
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// nAsync(g);

//-------------------------------------------------------------------------
import { BASE_URL } from "./base.js";
const tbody = document.querySelector("tbody");
const loader = document.querySelector(".loader");
async function getData(endpoint) {
  // const response = await fetch(BASE_URL + endpoint);
  try {
    loader.classList.remove("d-none");
    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    drawList(data);
  } catch (error) {
    console.log(error);
  } finally {
    loader.classList.add("d-none");

  }
}
console.log(getData("suppliers"));

function drawList(array) {
  tbody.innerHTML = "";
  array.forEach((list) => {
    tbody.innerHTML += `      
     <tr>
  
    <td>${list.id}</td>
    <td>${list.companyName}</td>
    <td>${list.address.street}</td>
    <td>${list.address.phone}</td>
    <td>${list.address.city}, ${list.address.country}</td>
    <td><a href="detail.html?id=${list.id}" class="btn btn-primary">details</a></td>
    <td><a class="btn btn-success" href="">Edit</a></td>
    <td><a class="btn btn-danger" href="">Delete</a></td>

  </tr> `;
  });
}
