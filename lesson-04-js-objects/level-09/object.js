// TODO: Declare named functions then assign them as methods on the exported object.
// Example:
// function greet(name) { return 'Hi ' + name }
// const user = { name: 'Ava' }
// user.greet = greet
// export default user

function greet() {
  console.log("Hello");
}

const user = {
  name: "Donald",
  email: "my@gmail.com",
};
user.address = "555 abc st.";
user.myFunction = greet;

greet();
user.greet();

export default user;
