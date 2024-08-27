let x;

//create object using the objet constructor
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = false;

x = todo;

//object nesting
const person = {
  address: {
    coords: {
      lat: 42.25432,
      lng: -74.345354,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, c: 4 };

//spread operator
const obj3 = { ...obj1, ...obj2 };
//same as  using...
const obj4 = Object.assign({}, obj1, obj2);

//Arrays of objects
const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids rom school" },
  { id: 3, name: "Take out trash" },
];
x = todos[0].name;

//get array of object keys
x = Object.keys(todo);

//get length of an object
x = Object.keys(todo).length;

//get array of object values
x = Object.values(todo);

//get array of object key/ value pairs
x = Object.entries(todo);

//check if object has a  property
x = todo.hasOwnProperty("age");
console.log(x);
