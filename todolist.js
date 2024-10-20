// Select Elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add Task Event Listener
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Add Task Function
function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // Create Task List Item
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="delete-btn">&times;</span>
        `;
        
        // Add Event Listener for Task Completion
        listItem.addEventListener('click', function () {
            listItem.classList.toggle('completed');
        });

        // Add Event Listener for Deletion
        listItem.querySelector('.delete-btn').addEventListener('click', function (e) {
            e.stopPropagation();
            listItem.remove();
        });

        // Append Task to List
        taskList.appendChild(listItem);
        
        // Clear Input Field
        taskInput.value = '';
    }
}
