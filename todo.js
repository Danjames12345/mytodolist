const buttons  = document.querySelector(".buttons")
document.querySelector

buttons.addEventListener("click", function (event) {
    event.preventDefault();
    let input  = document.querySelector(".input")
    let todolist = document.querySelector(".todolist")


    todolist.innerHTML += `${input.value}<button>delete</button>`
})