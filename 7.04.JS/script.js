const form = document.querySelector("form")
const text = document.querySelector(".text")
const btnClear = document.querySelector(".btn-clear")
let todos = [];
class Todo {
    constructor(todoItem) {
        this.todoItem = todoItem;
        this.isCompleted = false;
    }
    generteId() {
        return this.id = Date.now()
    }
}
function createTodo(todoItem) {
    let newTodo = new Todo(todoItem);
    newTodo.generteId()
    return newTodo;
}


form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (text.value.trim() === "") {
        window.alert("PLEASE FILL ")
    }
    else {
        todos.push(createTodo(text.value));
        create(todos)
        resetinpvalue()
    }
})
function resetinpvalue() {
    text.value = ""
}
const todoList = document.querySelector("ul")
function create(array) {
    todoList.innerHTML = ""
    array.forEach((item) => {
        const liElem = document.createElement("li")
        liElem.innerHTML = `
        <li class="list">
        <span>${item.todoItem}</span>
        <div class="btns">
            <button class="btn-check1" type="submit">
                <i class="fa-solid fa-check"></i>
            </button>
            <button class="btn-trash" type="submit">
                <i class="fa-solid fa-trash"></i>
            </button>
            <button class="btn-edit" type="submit">
                <i class="fa-solid fa-edit"></i>
            </button>
        </div>
      </li>
        `
        todoList.append(liElem);
    });
}


btnClear.addEventListener("click", function () {
    todos.length = 0
    create(todos)
})