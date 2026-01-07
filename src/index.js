
document.addEventListener('DOMContentLoaded', () => {
  // your code here

  const form = document.querySelector('#create-task-form');
  const taskInput = document.querySelector('#new-task-description');
  const taskList = document.querySelector('#tasks');

  // Function for creating a new task in the list
  const buildToDo = (task) => {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
  };

  // Handle form submission
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const task = taskInput.value.trim();

    if (task) {
      buildToDo(task);   // Add task to the list
      taskInput.value = ''; // Clear input after submission
    }
  });
});
