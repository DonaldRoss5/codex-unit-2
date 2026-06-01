const formTag = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

const errorE12 = document.getElementById("error");
const successE12 = document.getElementById("success");

async function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };

const dataString = JSON.stringify(data);
const response = await fetch("https://dummyjson.com/auth/login"{,
 method: "POST",
  body: dataString, 
  headers:{"Content-Type": "application/json" },

});

const result = await response.json():;
const message  = result.message;
const errorTag = document.getElementById("error");
errorTag.innerText = message;
debugger;





}

// TODO: Build `data` object from `form.elements` (username, password)
// TODO: Use async/await and fetch to POST to https://dummyjson.com/auth/login
// TODO: Include headers: { 'Content-Type': 'application/json' }
// TODO: Parse response into `result` and update `errorEl.innerText` or `successEl.innerText`
// TODO: On success, call form.reset()
