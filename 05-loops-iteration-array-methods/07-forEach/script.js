const socials = ["Twitter", "Instagram", "Facebook", "LinkedIn"];

//View prototype chain
console.log(socials.__proto__);

//Long form
socials.forEach(function (item) {
  console.log(item);
});

//Short form
socials.forEach((item) => console.log(item));

//We can also pass in the index and original array
socials.forEach((item, index, arr) => console.log(`${item}-${index}`, arr));

//Using a named function
function logSocials(social) {
  console.log(social);
}

socials.forEach(logSocials);

//Arrays of objects
const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Linkedin", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObjs.forEach((item) => console.log(item.url));
