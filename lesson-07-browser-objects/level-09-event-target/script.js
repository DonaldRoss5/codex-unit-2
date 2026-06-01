<<<<<<< HEAD
// TODO: In the submit handler, use event.target to reference the form instead of querying the DOM again.
// Example starter:
// function handleSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
// }
=======
// Level 09 — event.target starter
// TODO: inside submit handler inspect event.target and event.currentTarget

// TODO: call event.preventDefault() when experimenting
// event.preventDefault();

const form = document.getElementById("sample-form");
form.onsubmit = handleSubmit;

/////////////////////////////////////////

function handleSubmit(event) {
  event.preventDefault();
  const formTag = event.target;
  console.log(formTag.id);

  // console.log("event.target:", event.target);
  //console.log("event.currentTarget:", event.currentTarget);
}
<<<<<<< HEAD

// const form = document.getElementById('sample-form');
// if (form) form.onsubmit = handleSubmit;
>>>>>>> 8542081 (all completed)
=======
>>>>>>> c107093 (completed)
