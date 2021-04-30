// let msg = 'This text \n\
// can \n\
// span multiple lines';

// let msg1 = `This text
// can
// span multiple lines`;

// let name = 'slim';
// console.log('my name is ' + name);
// console.log(`my name is ${name}`);

let student = {
  name: "Sophia",
  passion: "Code",
};

function presentStudent() {
  const presentation = `L'étudiant(e) 
  ${student.name}, est passioné(e) par le, ${student.passion.toLowerCase()}`;

  console.log(presentation);
}

presentStudent();
