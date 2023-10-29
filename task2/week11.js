const taskInput = document.getElementById('input');
const button = document.getElementById('button');
const list = document.getElementById('list');

function createTask() {
	const newTask = document.createElement('li');
	newTask.textContent = taskInput.value;
	list.append(newTask);
	taskInput.value = '';
}

button.addEventListener('click', createTask);



list.addEventListener('click', function checkTask(evt) {
	if (evt.target.tagName === 'LI') {
	  evt.target.classList.toggle('active');
	}
  });
