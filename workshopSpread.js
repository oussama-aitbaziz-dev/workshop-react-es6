// Spread in function argument

// Example 1
// const sum = (...arguments) => {
//   return arguments.reduce((acc, curr) => acc + curr, 0);
// };
// console.log("sum: ", sum(1, 2, 3, 4, 5, 6, 200, 400, 500));

// Example 2
// const numbers = [1, 3, 400, 5000, -1, 0, 2000];
// const max = Math.max(...numbers);
// console.log("max: ", max);

// Spread in arrays

// const cities = ["San Francisco", "Los Angeles"];
// const places = ["Miami", "Chicago"];
// const locations = [...cities, ...places];
// console.log("locations: ", locations);

const places = ["Miami", "Chicago"];
const cities = ["San Francisco", "Los Angeles", ...places];
console.log("cities: ", cities);
