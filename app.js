const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const  taskInput= document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
    //Add task event
    form.addEventListener('submit',addTask);
}
function addTask(e){
    if(taskInput.value ===''){
        alert('Add a task');
    }
    //Create a li element
    const li = document.createElement('li');
    li.className='collection-item';

    li.appendChild(document.createTextNode(taskInput.value));

    

    e.preventDefault();
}