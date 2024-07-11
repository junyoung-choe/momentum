const toDoForm = $("#todo-form");
const toDoInput = $("#todo-form input");
const toDoList = $("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = $(event.target).parent(); // jQuery로 li 요소 선택
  li.remove();
  toDos = toDos.filter((toDo) => parseInt(toDo.id) !== parseInt(li.attr("id"))); // li의 id를 jQuery로 얻음
  saveToDos();
}

function paintToDo(newTodo) {
  const li = $("<li>"); // jQuery로 li 요소 생성
  li.attr("id", newTodo.id); // li 요소에 id 속성 추가
  const span = $("<span>");
  span.text(newTodo.text); // span 요소의 텍스트 설정
  const button = $("<button>");
  button.text("x");
  button.click(deleteTodo); // click 이벤트 리스너 추가
  li.append(span, button); // li 요소에 span과 button 추가
  toDoList.append(li); // toDoList에 li 요소 추가
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.val(); // jQuery로 input 요소의 값 가져오기
  toDoInput.val("");
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.submit(handleToDoSubmit); // submit 이벤트 리스너 추가

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  toDos = parseToDos;

  parseToDos.forEach(paintToDo);
}
