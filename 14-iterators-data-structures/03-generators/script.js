function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}
const teams = ["INDIA", "AUSTRALIA", "ENGLAND", "NEPAL"];

const iterator = createTeamIterator(teams);

console.log(iterator.next().value); //INDIA
console.log(iterator.next().value); //AUSTRALIA
console.log(iterator.next().value); //ENGLAND
console.log(iterator.next().value); //NEPAL
console.log(iterator.next().done); //true

//Use with for... of
for (const team of createTeamIterator(teams)) {
  console.log(team);
}

//Use with spread operator
console.log([...createTeamIterator(teams)]);

//Use with destructuring
const [first, second, third] = createTeamIterator(teams);
console.log(first, second, teams);
