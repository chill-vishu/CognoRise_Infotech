const taskInput = document.getElementById('input-task');
const addBtn = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    if(taskInput.value !== ""){
        const taskText = taskInput.value;
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                                ${taskText}
                                <button class="delete-btn">Delete</button>
                                `;
        taskList.appendChild(listItem);
        taskInput.value = "";                        
    }
});


taskList.addEventListener('click', (event) => {
    if(event.target.classList.contains("delete-btn")) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
})