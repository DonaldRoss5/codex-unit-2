// Level 03 starter script
// TODO: Use async/await when calling fetch inside the submit handler.
// TODO: use async/await to call fetch('https://api.jsoning.com/mock/public/users') and then set result.innerText

const form = document.getElementById("sample-form");
const result = document.getElementById("result");
form.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();

  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const pTag = document.getElementById("result");
  pTag.innerText =
    "async marks a function as asynchronous (takes time to finish). await is used to wait for fetch to finish";
}
