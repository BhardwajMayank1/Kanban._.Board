

const list = document.getElementsByClassName("list");

const addbtn = document.getElementById("add")

// load todos in localstorage

function loadTodos(){
    const savedTodos=JSON.parse(localStorage.getItem("todos")||[])
};

// create todo
 function createTodoElement(){
    let todo =document.createElement("li")

    // add text
    const textSpan = document.createElement("span");
    textSpan.textContent= "new task"

    todo.appendChild(textSpan)
    list.appendChild(todo);
 }

//  addtodo on click

addbtn.addEventListener("click",()=>{
    createTodoElement()
})


