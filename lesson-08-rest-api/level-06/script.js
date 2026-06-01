// Level 06 starter script
// TODO: Use form.elements (by index) to collect input values into a plain object.
// TODO: build a `data` object from form.elements using indexes (e.g. form.elements[0].value)

const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const username = form.element.username.value;
  const email = form.element.email.value;
  const note = form.element.note.value;
  const out = document.getElementById("data");
  console.log(form);

  // Example display: out.innerText = JSON.stringify(data, null, 2);
}

//can also put this in the function instead
//  elements saved into object

//const data = {
// username = form.element.username.value;
// email = form.element.email.value;
// note = form.element.note.value;
// }
