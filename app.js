const addForm = document.querySelector(".addTodo");
const list = document.querySelector(".todos");

// const makeTodo = () => {
//   const todo = document.createElement("li");
// };

addForm.addEventListener("submit", e => {
  e.preventDefault();
  const todoText = addForm.add.value;
  if (todoText !== "") {
    const todoTemplate = `<li>${todoText}<i class="material-icons red-text right">close</i></li>`;
    list.innerHTML += todoTemplate;
    addForm.reset();
  }
  //   makeTodo(todoText);
});
