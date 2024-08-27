// Value is stored in the stack
const name = "Anish";
const age = 21;

//reference is stored in the heap
const person = {
  name: "Ravi",
  age: 25,
};

let newName = name;
newName = "Ritu";

let newPerson = person;
newPerson.name = "Rinku";

console.log(name, newName);
console.log(person, newPerson);
