// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Functions
// function addTodo(event) {
//   event.preventDefault();
//   console.log("wooooooow");
// }

const addTodo = (event) => {
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // CHECK MARK BUTTON
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // CHECK trash BUTTON
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
};

// Event Listeners
todoButton.addEventListener("click", addTodo);
