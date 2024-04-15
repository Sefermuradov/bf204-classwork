// const inc = document.querySelector(".inc")
// const result = document.querySelector(".result")
// const dec = document.querySelector(".dec")
// const reset = document.querySelector(".reset")
// let count = localStorage.getItem("count") || 0;
// result.textContent = count

// inc.addEventListener("click", function () {
//     count++
//     result.textContent = count
//     localStorage.setItem("count", count)
// })

// dec.addEventListener("click", function () {
//     count--
//     result.textContent = count
//     localStorage.setItem("count", count)
// })

// reset.addEventListener("click", function () {
//     count = 0
//     result.textContent = count
//     localStorage.setItem("count", count)
// })


class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.id = Date.now()
    }
}
let users = JSON.parse(localStorage.getItem("usersArray")) || []

const form = document.querySelector("form")
const userName = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("word")
    let bool = users.some((item) => item.userName === userName.value || item.email === email.value)
    if (!bool) {
        let user = new User(userName.value, email.value, password.value)
        users.push(user)
        localStorage.setItem("usersArray", JSON.stringify(users))
        console.log(user)
    } else {
        alert("errorr")
    }
})


