const createBtn = document.querySelector("button.createBtn");
let indexValue = 0;
function createTodo() {
  let div = document.querySelector("#placement-div");
  let todo = document.querySelector("textarea");
  let newDiv = document.createElement("div");
  let moveBtn = document.createElement("button");

  if (todo.value === "") {
    alert("Invalid");
  } else {
    newDiv.classList = "bg-opacity-20 rounded-lg bg-gray-100 flex flex-col";
    moveBtn.classList = "w-4/12 border-black border rounded-full moveBtn";
    moveBtn.innerText = "Move";
    newDiv.innerHTML = `
        <p class="p-3">${todo.value}</p>
        `;
    moveBtn.parentNode = newDiv;
    newDiv.parentNode = div;

    newDiv.appendChild(moveBtn);
    div.appendChild(newDiv);
    todo.value = "";
  }
}

// This is all your original logic
function moveCard(btn) {
  console.log(btn.previousElementSibling);
  //gets the button that was created in the create todo method
  //is the parent div of btn
  let todo = btn.parentNode;
  //is the parent column of the todo
  let parent = todo.parentNode;
  if (todo.id === "last") {
    let closeBtn = document.createElement("button");
    closeBtn.innerText = "Close";
    todo = closeBtn.parentNode;
    todo.appendChild(closeBtn);
  }

  const todoDiv = document.querySelectorAll(".todo-div");

  let found;

  todoDiv.forEach((div, index) => {
    if (parent === div) {
      found = index + 1;
    }
  });
  todoDiv[found].appendChild(todo);
}

const main = document.querySelector("main");
// This event listener only responds to move events
main.addEventListener("click", (e) => {
  // If we are not clicking a move button than don't do anything.
  if (!e.target.classList.contains("moveBtn")) {
    return;
  }
  moveCard(e.target);
});
