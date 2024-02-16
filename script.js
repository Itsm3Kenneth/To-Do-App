const list = document.querySelector(".list");
const inputFeild = document.querySelector(".input-feild");
const addBtn = document.querySelector(".add-task");

const task = [];

function renderTask(reRender) {
  let result = "";
  if (reRender) {
    for (let i = 0; i < task.length; i++) {
      result += `<li>${task[i]}</li>`;
    }
    console.log("reRender");
    list.innerHTML = result;
    inputFeild.value = null;
  } else if (task.length > 0) {
    task.push(inputFeild.value);
    for (let i = 0; i < task.length; i++) {
      result += `<li>${task[i]}</li>`;
    }
    list.innerHTML = result;
    inputFeild.value = "";
  } else if (inputFeild.value.length > 0) {
    task.push(inputFeild.value);
    for (let i = 0; i < task.length; i++) {
      result += `<li>${task[i]}</li>`;
    }
    list.innerHTML = result;
    inputFeild.value = "";
  }
}

addBtn.addEventListener("click", () => {
  if (inputFeild.value.length > 0) {
    renderTask(false);
  }
});

inputFeild.addEventListener("keypress", (e) => {
  if (e.which === 13 && inputFeild.value) {
    renderTask(false);
  }
});

list.addEventListener("click", (e) => {
  let index = task.indexOf(e.target.textContent);
  task.splice(index, 1);
  console.log(index);
  renderTask(true);
});
