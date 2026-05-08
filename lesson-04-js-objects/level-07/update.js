// TODO: Update existing properties and export the updated object.
const obj = { age: 0 };
// TODO: update obj.age

const student = {
  level: 2,
  firstName: "Marcus",
  lastName: "Kennedy",
};
console.log("The student level before : " + student.level);

student.level = 1;
student.firstname = "Donald";
console.log("The student level after : " + student.level);
console.log("The student name after : " + student.name);

export default student;
