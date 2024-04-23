import { getAll, deleteOne, getOne, update } from "./API/requests/index.js";
import { endpoints } from "./API/base.js";

const moviesWrapper = document.querySelector(".movies-wrapper");
const editForm = document.querySelector("#edit-form");
const titleInp = document.querySelector("#title");
const posterInp = document.querySelector("#poster");
const trailerURLInp = document.querySelector("#trailerURL");
const genreInp = document.querySelector("#genre");
const ageInp = document.querySelector("#ageRes");
const countryInp = document.querySelector("#country");
const directorInp = document.querySelector("#director");
const descTextArea = document.querySelector("#desc");

window.addEventListener("load", () => {
  getAll(endpoints.movies).then((res) => {
    renderCards(res.data);
  });
});

function renderCards(arr) {
  moviesWrapper.innerHTML = "";
  arr.forEach((movie) => {
    moviesWrapper.innerHTML += ` <div class="col-lg-3 col-md-6 col-sm-12"data-id=${movie.id} data-editing="false">
        <div class="card mt-5">
            <div class="card-img">
                <img src="${movie.poster}" class="card-img-top" alt="${movie.title}" title="${movie.title}">
            </div>
            <div class="card-body">
            <marquee class="card-title" direction="left" behavior="scroll" scrollamount="6">${movie.title}</marquee>
                <div class="d-flex justify-content-between mb-3">
                    <a href="${movie.trailerURL}" target="_blank"       class="btn btn-outline-secondary ">click for trailer</a>
                    <br>
                    <div class="age">
                        <span>${movie.ageRestriction}+</span>
                    </div>
                </div>
                <hr>
                <a href="detail.html?id=${movie.id}" class="btn btn-outline-info info-btn">
                    <i class="fa-solid fa-circle-info"></i>
                </a>
                <button class="btn btn-outline-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="fa-solid fa-pen-to-square"></i>
                </button>
                <button class="btn btn-outline-danger delete-btn">
                    <i class="fa-solid fa-trash"></i>
                </button>
                </button>
                <button} class="btn btn-outline-danger wish-btn">
                    <i class="fa-regular fa-heart"></i> 
                </button>
            </div>
        </div>
    </div>`;
    //delete
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.closest(".col-lg-3 ").getAttribute("data-id");
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteOne(endpoints.movies, id);
            this.closest(".col-lg-3").remove();
            Swal.fire({
              title: "Deleted!",
              text: "Your card has been deleted.",
              icon: "success",
            });
          }
        });
      });
    });
    //edit button
    const editBtns = document.querySelectorAll(".edit-btn");
    editBtns.forEach((btn) => {
      btn.addEventListener("click", async function () {
        const id = this.closest(".col-lg-3").getAttribute("data-id");
        const response = await getOne(endpoints.movies, id);
        const movie = response.data[0];
        titleInp.value = movie.title;
        posterInp.value = movie.poster;
        trailerURLInp.value = movie.trailerURL;
        genreInp.value = movie.genre;
        ageInp.value = movie.ageRestriction;
        countryInp.value = movie.country;
        directorInp.value = movie.director;
        descTextArea.value = movie.description;
        this.closest(".col-lg-3").setAttribute("data-editing", "true");
      });
    });

    const wishBtns = document.querySelectorAll(".wish-btn");
    wishBtns.forEach((wishBtn) => {
      wishBtn.addEventListener("click", function () {
        const favicon = this.querySelector(".fa-heart");
        const id = this.getAttribute("data-id");
        if (favicon.className == "fa-regular fa-heart") {
          favicon.className = "fa-solid fa-heart";
        } else {
          favicon.className = "fa-regular fa-heart";
        }
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const favIndex = favorites.findIndex((item) => item == id);
        console.log(favIndex);
        if (favIndex === -1) {
          favorites.push(id);
        } else {
          favorites.splice(favIndex, 1);
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
    });
  });
}

editForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  console.log("edit form submit tets");
  const cards = document.querySelectorAll(".col-lg-3");
  let id;
  Array.from(cards).map((card) => {
    if (card.getAttribute("data-editing") == "true") {
      id = card.getAttribute("data-id");
      card.setAttribute("data-editing", "false");
    }
  });
  const updatedMovie = {
    title: titleInp.value,
    genre: genreInp.value,
    country: countryInp.value,
    director: directorInp.value,
    ageRestriction: ageInp.value,
    poster: posterInp.value,
    trailerURL: trailerURLInp.value,
    descripton: descTextArea.value,
  };
  await update(endpoints.movies, id, updatedMovie);
  renderCards();
});