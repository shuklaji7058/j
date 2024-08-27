//string
const firstName = "Anish";
//number
const age = 30;
const temp = 53.8;

//Boolean
const haskids = true;

//null
const aptNumber = null;

//undefined
//let score;
const score = undefined;

//symbol
//const id = symbol("id");

//BigInt
const n = 9786671234564n;

//reference types
const numbers = [1, 2, 3, 4, 5, 6, 7];

const person = {
  name: "Anish",
};

function sayHello() {
  console.log("Hello");
}

const output = sayHello;
console.log(output, typeof output);
// More info on why typeof null == object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#typeof_null

//  More info on the "function object" type
// https://262.ecma-international.org/5.1/#sec-11.4.3
