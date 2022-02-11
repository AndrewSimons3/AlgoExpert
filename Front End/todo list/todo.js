const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

input.addEventListener('input', typeTodo);
addButton.addEventListener('click', addTodo);

function addTodo() {
  const li = createListItem(input.value);
  todoList.appendChild(li);
  addButton.disabled = true;
  input.value = ''
}

function createListItem(name) {
  const listItem = document.createElement('li');
  const heading = document.createElement('h2');
  heading.textContent = name;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.classList.add('delete-button');
  deleteButton.addEventListener('click', deleteTodo);
  listItem.appendChild(heading);
  listItem.appendChild(deleteButton);

  return listItem;
}

function typeTodo() {
  addButton.disabled = input.value.length === 0;
}

function deleteTodo() {
  this.parentNode.remove();
}
