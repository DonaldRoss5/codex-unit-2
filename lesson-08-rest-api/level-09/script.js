// Level 09 starter script
// TODO: Save a target element and set its innerText to briefly compare GET and POST.
const result = document.getElementById("result");
// Example: result.innerText = 'GET is for reading; POST is for sending data.'


// 1.
const form = document.getElementById("sample-form");

form.onsubmit = handleSubmit;

//2.
async function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    a: form.elements.a.value,
    b: form.elements.b.value,
    c: form.elements.c.value,
  };
  const respone = await fetch("https://jsonplaceholder.tyicode.com/posts"{
    method: "POST",
    body: JSON.stringify(data),
  });
const user = await response.json();
const id = user.id;
  const pTag = document.getElementById("v1");

  pTag.innerText = "user ID: " + id;

}