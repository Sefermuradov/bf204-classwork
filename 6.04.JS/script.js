const body = document.body
const form = document.querySelector("form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

let users = []

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password

    }
    generateID() {
        return (this.id = Date.now())
    }
}

function createUser(username, email, password) {
    let user = new User(username, email, password)
    user.generateID()
    return user
}
form.addEventListener("submit", function (e) {
    e.preventDefault()
})