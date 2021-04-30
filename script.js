import { students, people as persons } from "./data.js";
import images from "./images.js";

const printNames = (data) => {
  data.map((person) => console.log(person.name));
};

const imagesTitles = (data) => {
  data.map((image) => console.log(image.title));
};

printNames(students);
console.log("------------");
printNames(persons);
console.log("------------");
imagesTitles(images);
