let x;

//array literal
const numbers = [12, 54, 6, 8, 98, 32];
const mixed = [12, "hello", true, null];

//Array constructor
const fruits = new Array("apple", "grape", "orange");

x = numbers[0];
x = numbers[0] + numbers[3];
x = `my favorite fruit is an ${fruits[2]}`;
x = numbers.length;
fruits[2] = "pear";

//fruits.length=2;

fruits[3] = "strawberry";

fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;
console.log(x);
