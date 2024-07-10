const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  // 지워도 UI에서만 없어지는것 접근은 가능하다 !
  li.remove();
  toDos = toDos.filter((toDo) => parseInt(toDo.id) !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(event) {
//   console.log(event);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;
  // sayHello 메소드와 같은 기능을 한다.
  // parseToDos.forEach((item) => console.log("this is the turn of ", item));
  parseToDos.forEach(paintToDo);
}

// function testFilter(param) {
//   return param
// }

// forEach랑 비슷하며, 1,2,3,4 를 각 각 testFilter에 넣어서 호출한다.
// filter에서 true가 리턴되면 param으로 던졌던 속성은 배열에 들어간다.
// filter에서 false가 리턴되면 param으로 던졌던 속성은 빠지고 만들어진다.
// [1, 2, 3, 4].filter(testFilter);
