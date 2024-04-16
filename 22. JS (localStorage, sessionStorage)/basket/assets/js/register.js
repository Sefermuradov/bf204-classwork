import { User } from "./class.js";

const registerForm = document.querySelector("form");
const userNameInp = document.querySelector("#user-name");
const userEmailInp = document.querySelector("#user-email");
const userPassInp = document.querySelector("#user-password");
const userConfirmPassInp = document.querySelector("#user-confirm-password");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newUser = new User(
    userNameInp.value,
    userEmailInp.value,
    userPassInp.value
  );
  resetForm();
  const localUsers = JSON.parse(localStorage.getItem("users"));
  localUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(localUsers));
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "User Signed Up Successfully",
    showConfirmButton: false,
    timer: 1000,
  }).then(() => {
      window.location.replace("login.html");
  });
});

function resetForm() {
  userNameInp.value = "";
  userEmailInp.value = "";
  userPassInp.value = "";
  userConfirmPassInp.value = "";
}
