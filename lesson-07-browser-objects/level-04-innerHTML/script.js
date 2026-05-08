<<<<<<< HEAD
// TODO: Select element with getElementById('content'), log previous innerHTML, then set new innerHTML.
// Keep changes simple and avoid inserting untrusted markup.
=======
// Level 04 — innerHTML starter
// TODO: select an element (e.g. document.getElementById('content'))
// TODO: log previous innerHTML, set a small markup string (e.g. <strong>), then log after value

// Scaffold:
// const el = document.getElementById('content');
// console.log('before innerHTML:', el && el.innerHTML);
// // TODO: el.innerHTML = '<strong>New content</strong>';
// console.log('after innerHTML:', el && el.innerHTML);

const myContent = document.getElementById("content");

console.log(myContent && myContent.innerHTML);

myContent.innerHTML = "Hi Marcus";

console.log(myContent.innerHTML);
>>>>>>> 8542081 (all completed)
