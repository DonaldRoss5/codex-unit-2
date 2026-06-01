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

//const myContent = document.getElementById("content");

//console.log(myContent && myContent.innerHTML);

//myContent.innerHTML = "Hi Marcus";

<<<<<<< HEAD
console.log(myContent.innerHTML);
>>>>>>> 8542081 (all completed)
=======
//console.log(myContent.innerHTML);

const divTag = document.getElementById("content");

divTag.innerHTML = "<h1>Hello World!</h1>";

console.log(divTag.innerHTML);

const pTag = document.getElementById("pContent");

pTag.innerHTML = "<p>Hi Donald</p>";

console.log(pTag.innerHTML);

//const strongTag = document.querySelector("tStrong");

//strongTag.innerHTML = "<h1>I am here</h1>";
>>>>>>> c107093 (completed)
