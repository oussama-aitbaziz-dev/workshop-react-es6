let array = [15, 24, 15, 26, 1, 8, 45];

// let array1 = array.map(el=>el*2)
// let array2 = array.filter((el, i)=>el>20)
let array3 = array.reduce((acc, cur) => acc + cur, 5);
// let array4 = array.find(el=> el>25)
// let array5 = array.findIndex(el=> el>25)

// function map (){
//   let array=[15, 24, 15, 26, 1, 8, 45]
//   for(let i=0; i< array.length; i++){
//     array[i]=array[i]+1
//   }
//   return array
// }
console.log(array3);

// function filter (){
//   let array=[15, 24, 15, 26, 1, 8, 45]
//   let tab = []
//   for(let i=0; i< array.length; i++){
//     if(array[i]>20){
//       tab=tab.concat(array[i])
//     }
//   }
//   return tab
// }

// let combine = [...array, 100, 12]

// console.log(combine)

// ES6 Loops
for (let i = 0; i < array.length; i++) {
  console.log(`Currently looping on index ${i}, with value ${array[i]}`);
}

const newArray = array.map((value, index) =>
  console.log(`Currently looping on index ${index}, with value ${value}`)
);

const filtredArr = array.filter((value) => value > 20);
console.log("filtredArr: ", filtredArr);

// Calculer l'age moyen des étudiants
let students = [
  { name: "Ahmed", age: 27 },
  { name: "Abbas", age: 22 },
  { name: "Aly", age: 29 },
  { name: "Ahmed", age: 28 },
  { name: "Kareem", age: 35 },
];

const moyenne = students.reduce((accumulateur, elementActuel, index) => {
  console.log(
    `Nous sommes à l'itération ${index}, la valeur de l'accumulateur est ${accumulateur} et l'age de l'étudiant actuel est ${
      elementActuel.age
    }, total :${accumulateur + elementActuel.age}`
  );
  return accumulateur + elementActuel.age;
}, 0);

console.log(
  "Moyenne d'age des étudiants est : ",
  Math.floor(moyenne / students.length)
);
