<<<<<<< HEAD
// TODO: Use querySelector('#content') to select element and update innerHTML to explain querySelector vs getElementById
=======
// Level 05 — querySelector starter
// TODO: use document.querySelector('#content') or document.querySelectorAll('.item')
// TODO: log previous content and update nodes (iterate NodeList with forEach)

// Scaffold:
// const one = document.querySelector('#content');
// console.log('before:', one && one.innerHTML);
// // TODO: one.innerHTML = '...';
// const list = document.querySelectorAll('.item');
// list.forEach((el, i) => {
//   // TODO: update each el.innerText
// });
const pTag = document.querySelector("p");

pTag.innerHTML = "<h2>I love Marcus!</h2>";
>>>>>>> b81312d (level 5 completed)
