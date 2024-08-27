let x;

// Creating an object
const person = {
  name: "Ravi shukla",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "GKP",
    state: "UP",
  },
  hobbies: ["Coding", "sports"],
};

// Accessing object properties
x = person.name; // Dot notation
x = person["age"]; // Bracket notation
x = person.address.state;
x = person.hobbies[0];

// Updating properties
person.name = "Ravi Shukla";
person["isAdmin"] = false;

// Deleting properties
delete person.age;

// Create new properties
person.hasChildren = true;

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  "first name": "Anish",
  "last name": "Shukla",
};

x = person2["first name"];

console.log(x);
