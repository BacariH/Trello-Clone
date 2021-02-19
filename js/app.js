const createBtn = document.querySelector('button.createBtn');


createBtn.addEventListener('click', createTodo);

function createTodo(){
    let div = document.querySelector("#placement-div");
    let todo = document.querySelector('textarea');
    let newDiv = document.createElement('div');
    let moveBtn = document.createElement('button');

    if(todo.value === ""){
        alert("Invalid");
    } else{
        
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
    
    
    moveBtn.addEventListener('click', moveProgress);
}

function moveProgress(){
    //gets the button that was created in the create todo method
    let moveBtn = document.querySelector('.moveBtn');

    //is the parent 
    let todo = moveBtn.parentNode;
    let parent = todo.parentNode;
    console.log(parent);
    let todoDiv = document.querySelectorAll('.todo-div');
    //let count = 0;
    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    const third = document.querySelector('#third');
    const placementDiv = document.querySelector('#placement-div');

    // if(parent === placementDiv){
    //     first.appendChild(todo);
    // }

    // if(parent === first){
    //     second.appendChild(todo);
    // }

    // if(parent === second){
    //     third.appendChild(todo);
    // }

    


    //console.log(todo, todo.parentNode);
    let found = 0;
    todoDiv.forEach((div, index) => {
        if(parent === div){
            found = index + 1;
        }
    })
    todoDiv[found].appendChild(todo);
    // count++;
    
}
