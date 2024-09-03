class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get firstName() {
    return this.capitalizeFirst(this.firstName);
  }

  set firstName(value) {
    this._firstName.capitalizeFirst(value);
  }

  get lastName() {
    return this.capitalizeFirst(this._lastName);
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  capitalizeFirst(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person("john", "doe");
console.log(person1.firstName);
console.log(person1.lastName);

person1.firstName = "joe";
person1.lastName = "smith";
console.log(person1.fullName);
console.log(person1);
