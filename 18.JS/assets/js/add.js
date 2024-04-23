import { post } from "./API/requests/index.js";
import { endpoints } from "./API/base.js";
const title = document.querySelector("#addtitle");
const releaseYear = document.querySelector("#addyear");
const poster = document.querySelector("#addposter");
const trailerURL = document.querySelector("#addtrailerurl");
const genre = document.querySelector("#addgenre");
const country = document.querySelector("#addcountry");
const director = document.querySelector("#adddirector");
const ageRestriction = document.querySelector("#addrestriction");
const description = document.querySelector("#adddescription");
const postForm = document.querySelector(".post-form");

postForm.addEventListener("submit", async function (e) {
  e.preventDefault();
//   const file = poster.files[0];
//   const { name, type } = file;
//   const sizeKb = Math.round(file.size / 1024);
//   let reader = new FileReader();
//  reader.readAsDataURL(file)
//   if (!type.includes("image/")) {
//     Swal.fire({
//       position: "top-end",
//       icon: "error",
//       title: "Invalid File Type",
//       showConfirmButton: false,
//       timer: 1500,
//     });
    
//   }
//   else if(sizeKb>3072){
//     Swal.fire({
//       position: "top-end",
//       icon: "error",
//       title: "File Size Exceeded",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   }
//   reader.onloadend = function () {
    
//   };
  if (
    title.value.trim() !== "" &&
    releaseYear.value.trim() !== "" &&
    poster.value.trim() !== "" &&
    trailerURL.value.trim() !== "" &&
    genre.value.trim() !== "" &&
    description.value.trim() !== "" &&
    ageRestriction.value.trim() !== "" &&
    country.value.trim() !== "" &&
    director.value.trim() !== ""
  ) {
    const movies = {
      title: title.value,
      releaseYear: releaseYear.value,
      poster: poster.value,
      trailerURL: trailerURL.value,
      genre: genre.value,
      description: description.value,
      ageRestriction: ageRestriction.value,
      country: country.value,
      director: director.value,
    };
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your card has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    await post(endpoints.movies, movies);
  } 
  else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Your card has not been saved",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});
