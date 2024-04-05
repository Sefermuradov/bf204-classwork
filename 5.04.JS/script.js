const body = document.body
const card = document.createElement("div")
card.classList.add("card")

const img = document.createElement("img")

img.setAttribute("src", "https://media.istockphoto.com/id/481229372/photo/spiral-galaxy-illustration-of-milky-way.jpg?s=612x612&w=0&k=20&c=O-OKRJWM_XhGv48z6OhOj_tKBwEaDsvhYKguEN1yuJM=")

img.classList.add("card-img-top")
const cardbody = document.createElement("div")
cardbody.classList.add("card-body")

const cardtitle = document.createElement("h5")
cardtitle.classList.add("card-title")
cardtitle.textContent = "Card title"

const parag = document.createElement("p")
parag.classList.add("card-text")
parag.textContent = "Some quick example text to build on the card title and make up the bulk of the card's content."

const button = document.createElement("a")
button.classList.add("btn")

button.textContent = "Go somewhere"
button.setAttribute("href", "#")

button.style.color = "white"
button.style.textDecoration = "none"
button.style.backgroundColor = "blue"
button.style.padding = "10px"
button.style.borderRadius = "5px"
button.style.fontSize = "17px"



cardbody.append(cardtitle, parag, button)
card.append(img, cardbody)
body.append(card)

const students = [
    "aytac",
    "aysel",
    "ilqar",
    "farid",
    "zakir",
    "aydan",
    "ilvin",
]
const wrapper = document.querySelector(".wrapper")
const studentsList = document.createElement("ul")
students.forEach((item) => {
    const liElem = document.createElement("li")
    liElem.textContent = item
    studentsList.appendChild(liElem)
    liElem.addEventListener("click", function () {
        console.log(this.textContent)
        this.remove()
    })
})

wrapper.appendChild(studentsList)


const btn=document.querySelector("change-btn")
btn.addEventListener("click",function(){


})