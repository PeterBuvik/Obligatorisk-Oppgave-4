document.querySelector('#push').onclick = function () {
  const taskInput = document.querySelector('#newtask input');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task!');
  } else {
    document.querySelector('#tasks').innerHTML += `
          <article class="task">
              <span>${taskInput.value}</span>
              <button class="delete">Delete</button>
          </article>
      `;

    taskInput.value = ''; // Clear input after adding

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((button) => {
      button.onclick = function () {
        this.parentElement.remove();
      };
    });
  }
};
document.querySelector('#push').onclick = function () {
  const taskInput = document.querySelector('#newtask input');

  if (taskInput.value.trim() === '') {
    alert('Please enter a task!');
  } else {
    document.querySelector('#tasks').innerHTML += `
            <article class="task">
                <span>${taskInput.value}</span>
                <button class="delete">Delete</button>
            </article>
        `;

    taskInput.value = ''; // Clear input after adding

    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((button) => {
      button.onclick = function () {
        this.parentElement.remove();
      };
    });
  }
};
function toggleDone(e) {
  if (!e.target.matches("input")) return; // skips if target is not an input.
  // event delegation - chatGPT
  const element = e.target;
  const index = element.dataset.index;
  tasks[index].done = !tasks[index].done;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  populateList(tasks, list);
}
addTasks.addEventListener("submit", addTask);

list.addEventListener("click", toggleDone);
populateList(tasks, list);