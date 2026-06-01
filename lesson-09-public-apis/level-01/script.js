const form = document.getElementById("loginForm");
formTag.onsubmit = handleSubmit;

async function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  const data = {
    username: formTag.elements.username.value,
    password: formTag.elements.password.value,
  };
  const dataString = JSON.stringify(data);
  const response = await fetch("https://dummyjson.com/user", {
    method: "POST",
    body: dataString,
    headers: { "Content Type": "application/json" },
  });
  const result = await response.json();

//const message = result.message;
//const errorTag = document.getElementById("error");
//errorTag.innerText = messsage;

}

//const successEl = document.getElementById("success");

// TODO: Call event.preventDefault()
// TODO: Create `data` object with username and password from form.elements
// TODO: const dataString = JSON.stringify(data)
// TODO: Use async/await with fetch to POST to https://dummyjson.com/auth/login
// TODO: Include headers: { 'Content-Type': 'application/json' }
// TODO: Parse response into `result` and console.log(result)
