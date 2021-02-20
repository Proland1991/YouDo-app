
const toDoForm = document.getElementById("toDoForm");
const taskField = document.getElementById("taskField");
const todos = document.getElementById('todos');

toDoForm.addEventListener('submit',(e) => {
    e.preventDefault();

    const todoText = taskField.value;

    if (todoText) {

        const newToDo = document.createElement('li');

        newToDo.innetText = todoText;
        todos.appendChild(newToDo);

        taskField.value ="";

    }
    });