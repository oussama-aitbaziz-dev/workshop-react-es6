// Problem solving steps:

// #1 Define the problem
const people = [
  { name: "Ahmed", age: 27 },
  { name: "Abbas", age: 22 },
  { name: "Ahmed", age: 60 },
  { name: "Aly", age: 29 },
  { name: "Ahmed", age: 28 },
  { name: "Kareem", age: 35 },
  { name: "Ahmed", age: 20 },
];
//  Task:
//  we need the sum of the ages of the people
//  between 25 and 30 and thier name is Ahmed

// #2 Plan a solution

// Filter people with age between 25 & 30
// Filter people named "Ahmed"
// Get filtred people ages
// Calc the sum of ages

// #3 Write the solution
const sumOfAges = people
  .filter((person) => person.age >= 25 && person.age <= 30)
  .filter((person) => person.name === "Ahmed")
  .map((person) => person.age)
  .reduce((acc, age) => acc + age, 0);

// #4 Refactor the solution
const refactoredLogic = people
  .filter(
    (person) => person.name === "Ahmed" && person.age >= 25 && person.age <= 30
  )
  .reduce((acc, person) => acc + person.age, 0);

console.log("refactoredLogic: ", refactoredLogic);
