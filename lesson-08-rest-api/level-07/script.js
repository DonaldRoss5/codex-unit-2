// Level 07 starter script
//TODO: Build a data object from form.elements and use fetch POST to https://api.jsoning.com/mock/public/users
// TODO: collect values via form.elements (e.g. form.elements['username'].value)

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
  const respone = await fetch("https://jsonplaceholder.tyicode.com/posts", {
    method: "POST",
    body: data,
  
  });

  const pTag = document.getElementById("result");

  pTag.innerText =
    "Provide an options object. The method property should be POST body property contains the data.";
}

("Provide an options object. The method property should be POST body propertuy contains the data ");
// Build a `data` object whose keys match the input `name` attributes.
// NOTE: intentionally do NOT JSON.stringify the data here; attach the raw object to `body` to expose an error for students to debug.
// Example (student task):
// const data = { username: form.elements['username'].value, email: form.elements['email'].value };
// const response = await fetch('https://api.jsoning.com/mock/public/users', { method: 'POST', body: data });
// result.innerText = 'Posted — inspect response in console or check for errors.';
