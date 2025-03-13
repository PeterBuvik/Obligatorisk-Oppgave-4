document.querySelector('#push').onclick = function() {
  const taskInput = document.querySelector('#newtask input');

  if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
  } else {
      document.querySelector('#tasks').innerHTML += `
          <article class="task">
              <span>${taskInput.value}</span>
              <button class="delete">Delete</button>
          </article>
      `;

      taskInput.value = ""; // Clear input after adding

      const deleteButtons = document.querySelectorAll('.delete');
      deleteButtons.forEach(button => {
          button.onclick = function() {
              this.parentElement.remove();
          };
      });
  }
};