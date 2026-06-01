// Level 05 starter script
// TODO: Fetch GET https://api.jsoning.com/mock/public/users, await response.json(), and read display the data.
// TODO: implement fetch and set the three elements' innerText

const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const userdata = await response.json();

  const userId = userdata.userId;
  const title = userdata.title;
  const isCompleted = userdata.completed;
  const pTag1 = document.getElementById("url");
  const pTag2 = document.getElementById("host");
  const pTag3 = document.getElementById("encoding");

  pTag1.innerText = "UserID: " + userId;
  pTag2.innerText = "Title: " + title;
  pTag3.innerText = "Is Completed: " + isCompleted;
}
