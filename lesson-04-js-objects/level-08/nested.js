// TODO: Default-export an object with nested properties.
// Example: export default { theme: { color: 'blue' } }
//export default {
/* TODO: nested structure */
//};

const car = {
  year: 2026,
  make: "Ford",
  model: "f150",
  features: {
    autoIdle: true,
    antilock: true,
    bluetooth: true,
  },
};

console.log(car.year);
console.log(car.features.seats);
export default car;
