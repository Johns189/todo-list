let userInput = document.querySelector("#user-input")
let todolistElement = document.querySelector("#todo-list")

let todos = []
//Dette er det som skal skje når brukeren trykker på legg till knappen



function handleSubmit(event) {
    event.preventDefault(); //Forhindrer nettsiden og lastes inn på nytt

    console.log("Create Todo Object...");
    let newTodo = createTodoObject(userInput);
    
    console.log("Append new todo to todo list..." );
    todos.push(newTodo);

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