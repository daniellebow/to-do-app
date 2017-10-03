function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // get the text
      let title = newToDoText.value;

      // create a new li
      let newLi = document.createElement('li');

      // create a new input for the checkbox
      let checkbox = document.createElement('input');

      // set the input's type to checkbox
      checkbox.type = "checkbox";

      // create a new input for the delete button
      let deleteButton = document.createElement('button');

      // set the input's type to button
      deleteButton.type = "button";

      // set the title
      newLi.textContent = title;

      // attach it to the ul
      toDoList.appendChild(newLi);

      // attach the checkbox to the li
      newLi.appendChild(checkbox);

      // attach the delete button to the li
      newLi.appendChild(deleteButton);

      //empty the input
      newToDoText.value = '';

      deleteButton.addEventListener('click', function() {
                            deleteButton.parentNode.remove();
                    });

    });
  }

  window.onload = function() {
   onReady();
 };
