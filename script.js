const list = document.querySelector(".list");
const inputFeild = document.querySelector(".input-feild");
const addBtn = document.querySelector(".add-task");

const task = [];

function renderTaskList() {
  let result = "";
  for (let i = 0; i < task.length; i++) {
    result += `<li class="list-item">${task[i]}</li>`;
  }
  list.innerHTML = result;
  inputFeild.value = "";
}

function renderTask() {
  let result = "";
  if (task.length > 0) {
    task.push(inputFeild.value);
    for (let i = 0; i < task.length; i++) {
      result += `<li class="list-item">${task[i]}</li>`;
    }
    list.innerHTML = result;
    inputFeild.value = "";
  } else if (inputFeild.value.length > 0) {
    task.push(inputFeild.value);
    for (let i = 0; i < task.length; i++) {
      result += `<li class="list-item">${task[i]}</li>`;
    }
    list.innerHTML = result;
    inputFeild.value = "";
  }
}

addBtn.addEventListener("click", () => {
  if (inputFeild.value) {
    renderTask();
  }
});

inputFeild.addEventListener("keypress", (e) => {
  if (e.which === 13 && inputFeild.value) {
    renderTask();
  }
});

list.addEventListener("click", (e) => {
  const index = task.indexOf(e.target.textContent);
  task.splice(index, 1);
  console.log(task);
  renderTaskList();
});
