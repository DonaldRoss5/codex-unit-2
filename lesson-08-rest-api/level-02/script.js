// Level 02 starter script
// TODO: Get & save the form element to `form`, attach onsubmit, and call event.preventDefault().

// TODO: set result.innerText to a short explanation about fetch

const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

const result = document.getElementById("result");

function handleSubmit(event) {
  event.preventDefault();
  const resultTag = document.getElementById("result");
  resultTag.innerText =
    "The fetch function takes in a URL & connects to a server";
}
