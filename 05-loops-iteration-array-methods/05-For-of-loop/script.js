//Loop through arrays
const items = ["book", "table", "chair", "watch"];
const users = [{ name: "Anish" }, { name: "ravi" }, { name: "Ritu" }];

for (const item of items) {
  console.log(item);
}

for (const user of users) {
  console.log(user.name);
}

//Loop over string
const str = "Hello World";

for (const letter of str) {
  console.log(letter);
}

//Loop over maps

const map = new Map();
map.set("name", "Anish");
map.set("age", 30);

for (const [key, value] of map) {
  console.log(key, value);
}
