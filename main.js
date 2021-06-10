const task = document.querySelector('.toDo-add');
const btnAdd = document.querySelector('.btnAdd');
const btnDelete = document.querySelector('.btnDelete');
const taskText = document.querySelector('.task-text');
const wrapper = document.querySelector('.wrapper');

const checkbox = document.querySelectorAll('input[type=text]');

let tasks = [];

function createTask(){
  tasks.push(task.value);
  task.value= "";
  localStorage.setItem("tasks", JSON.stringify(tasks));
  console.log(tasks);
}

function deteleAll(){
    alert("Вы всё удалили");
    wrapper.innerHTML= "";
    localStorage.clear();
}

function checkText(){
  if (task.value == "" || task.value == " "){
    alert("Вы не ввели текст");
    }
    else {
      createTask();
    }
}

function displayMessage(){
  let name = '';
  tasks.forEach( function(item, i){
    name += `
    <div class="task">
      <input type="checkbox" id='item_${i+1}'
      <div class="task-text card">${item}</div>
    </div>
    `;
    wrapper.innerHTML= name;
  });
}

// function checkboxCheck(){
//   if(checkbox.checked){
//     task.classList.add("lineTrtough");
//     console.log("yup");
//   }
// }
//
//
// checkbox.forEach( function(){
//   checkbox.addEventListener('change', () => {
//     checkboxCheck();
//     console.log("yup1");
//   });
// })


btnAdd.addEventListener('click', () => {
  checkText();
  displayMessage();
});

btnDelete.addEventListener('click', () =>{
  deteleAll();
});
