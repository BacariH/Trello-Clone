const createBtn = document.querySelector('button.createBtn');


createBtn.addEventListener('click', createTodo);

function createTodo(){
    let div = document.querySelector("#placement-div");
    let todo = document.querySelector('textarea').value;
    let newDiv = document.createElement('div');

    
    newDiv.classList = "bg-opacity-20 rounded-lg bg-gray-100 flex flex-col";
    newDiv.innerHTML = `
        <p class="p-3">${todo}</p>
        <button class="w-4/12 border-black border rounded-full">Move</button>
    `;
    newDiv.parentNode = div;
    
    div.appendChild(newDiv);
}