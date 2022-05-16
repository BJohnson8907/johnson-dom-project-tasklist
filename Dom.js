const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

loadEventListeners();

function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addtask);
    //Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task event
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

//add task
function addtask(e) {
if(taskInput.value === '') {
    alert('Add task');
}

//create list for tasks
const li = document.createElement('li');

li.className = 'collection item';

li.appendChild(document.createTextNode(taskInput.value));

const link = document.createElement('a');

link.className = 'delete-item secondary-content';

link.innerHTML = '<i class="fa fa-remove"></i>';

li.appendChild(link);

taskList.appendChild(li);
//clear input
taskInput.value = '';

e.preventDefault();    
}

//Remove task
function removeTask(e) {
    if(e.target.parentElement.classList.conatins('delete-item')) {
    e.target.parentElement.parentElement.remove();
    }
}
//clear tasks
function clearTasks() {
    taskList.innerHTML = '';
}
function filterTasks() {
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
         } else {
            task.style.display = 'none';
        }

    });

}