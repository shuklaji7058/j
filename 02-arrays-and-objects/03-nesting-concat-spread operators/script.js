let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "raspberry"];

//nesting arrays

//nesting berries inside of fruits
fruits.push(berries);

//now we can access 'blueberry' with the following
x = fruits[3][1];

//create a new variable and nest arrays
const allFruits = [fruits, berries];
x = allFruits[1][2];

//concat()-concatenation arrays
x = fruits.concat(berries);

//spread operator (...)-concatenation with
x = [...fruits, ...berries];

//flat()-flatten an array
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

//static methods of array object

// isArray() - check is an array
x = Array.isArray(fruits);

//from()-create an array from an array like value
x = Array.from("12345");

//of()-create an array from a set of values
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);
console.log(x);
