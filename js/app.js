const createBtn = document.querySelector('button.createBtn');
let indexValue = 0;
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
        moveBtn.setAttribute("onclick", "moveProgress()")
        moveBtn.parentNode = newDiv;
        newDiv.parentNode = div;
    
        newDiv.appendChild(moveBtn);
        div.appendChild(newDiv);
        todo.value = "";
    }
    
    
}

function moveProgress(btn){
    console.log(btn);

    // //TODO edit make sure the click eventhandler first click does not double click.
    // //it does a double click
    // moveBtns.forEach((btn) => {
    //     btn.addEventListener('click', () => {
            
    //         console.log(btn.previousElementSibling);
    //         //gets the button that was created in the create todo method
    //         //is the parent div of btn
    //         let todo = btn.parentNode;
    //         //is the parent column of the todo
    //         let parent = todo.parentNode;
    //         if(todo.id === "last" ){
    //             let closeBtn = document.createElement('button');
    //             closeBtn.innerText = 'Close';
    //             todo = closeBtn.parentNode;
    //             todo.appendChild(closeBtn);
    //         }
        
    //         const todoDiv = document.querySelectorAll('.todo-div');
            
    //         let found;
            
        
    //         todoDiv.forEach((div, index) => {
    //             if(parent === div){
    //                 found = index + 1;
    //             } 
                
    //         })
    //         todoDiv[found].appendChild(todo);
            
    //     });
    // })
   
}

