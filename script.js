let userInput = document.querySelector("#user-input")
let todolistElement = document.querySelector("#todo-list")

/* //originalen
let toStore = [1, 2, 3, 4]

//Oversett og lagre i LocalStorage
let jsonToStore = JSON.stringify(toStore)
localStorage.setItem("todos", jsonToStore);

//Hent ut og oversett tilbake til JavaScript
let storedItem = localStorage.getItem("todos");
let converted = JSON.parse(storedItem)

//Logg ut originalen og det vi har hentet ut fra LocalStorage
console.log(toStore)
console.log(converted) */


let storedTodos = localStorage.getItem("todos");
let convertedTodos = JSON.parse(storedTodos)
let todos = convertedTodos;

renderTodos();

//Dette er det som skal skje når brukeren trykker på 
//Legg till knappen

function handleSubmit(event) {
    event.preventDefault(); //Forhindrer nettsiden og lastes inn på nytt

    console.log("Create Todo Object...");
    let newTodo = createTodoObject(userInput);
    
    console.log("Append new todo to todo list..." );
    todos.push(newTodo);

    console.log("Uppdating the stored list...")
    let jsonTodos = JSON.stringify(todos)
    localStorage.setItem("todos",jsonTodos)

    renderTodos();
    
    }


userInput.addEventListener("submit", handleSubmit);

// Denne leser av dataen i et form element
// og lager en JavaSkript objekt for Gjøremålene

function createTodoObject(form) {

    let todo = form.querySelector("#todo");
    let todoValue = todo.value;
    
    let todoObject = {
        title: todoValue,
    };

    return todoObject;

}

function createTodoCard(todoObject) {
    console.log(todoObject)
    // Lag alle elementene vi trenger
    let todoCard = document.createElement("li");
    let titleElement = document.createElement("h2");

    // Sett de samme til ett element
    todoCard.append(titleElement);

    titleElement.textContent = todoObject.title;

return todoCard;
}

//Den har jobben og oppdatere HTML fra gjøremålene
function renderTodos() {
    console.log("Clearing out the old todos from the document...")
    todolistElement.innerHTML = "";
    
    console.log("Appending all todos to the Document...");
    todos.forEach((todo, index) => {
        console.log(todo)
        console.log(index)
        //Først lege det HTML for det gjøremålet
        let newTodoCard = createTodoCard(todo);

        //Legg det nye html elementet til i Dokumentet
        todolistElement.append(newTodoCard);
    });   
}