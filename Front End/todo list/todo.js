const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');

input.addEventListener('input', onTypeTodo);
addButton.addEventListener('click', onClickAdd);

function onClickAdd() {
	const li = createListItem(input.value);
	todoList.appendChild(li);
	input.value = '';
	addButton.disabled = true;
}

function onTypeTodo() {
	addButton.disabled = input.value.length === 0;
}

function createListItem(value) {
	const listItem = document.createElement('li');
	const heading = document.createElement('h2');
	heading.textContent = value;
	const deleteButton = document.createElement('button');
	deleteButton.textContent = 'X';
	deleteButton.classList.add('delete-button');
	deleteButton.addEventListener('click', onClickDelete);

	listItem.appendChild(heading);
	listItem.appendChild(deleteButton);

	return listItem;
}

function onClickDelete() {
	this.parentNode.remove();
}
