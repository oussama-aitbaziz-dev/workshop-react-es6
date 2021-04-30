// Array Destructuring
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const firstValue = arr[0];
// const secondValue = arr[1];

// const [firstValue, secondValue] = arr;
// console.log("firstValue: ", firstValue);
// console.log("secondValue: ", secondValue);

// const [firstValue, , , , fifthValue] = arr;

// console.log("firstValue: ", firstValue);
// console.log("secondValue: ", fifthValue);

// Object Destructuring

// Object
const userCard = {
  name: "Jaafer Dawoud",
  address: {
    city: "Amsterdam",
    country: "Holland",
  },
};

// const userName = userCard.name;
// const userAddress = ouserCardbj.address;

const {
  name,
  address: { city, country },
} = userCard;

const printInfo = (info) => console.log(info);

const info = `Welcome ${name}, from ${city}, ${country}.`;

printInfo(info);
