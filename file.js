const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');


function addTask () {
  const taskText = inputTask.value.trim();
  if (taskText !== "") {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskContainer.appendChild(li);
    inputTask.value = '';
    li.addEventListener('click', completeTask);
    const deleteButton = document.createElement('button');
    deleteButton.style.backgroundColor= '#bb2424';
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteTask);
    li.appendChild(deleteButton);
  } else {
    alert('you must write an input');
  }
 
}

function show() {
  document.getElementsByClassName('task-wrapper').classList.remove = ('hidden');
}

function completeTask(event) {
  const task = event.target;
  task.classList.toggle('completed');
}

function deleteTask(event) {
  const task = event.target.parentElement;
  taskContainer.removeChild(task);
}





