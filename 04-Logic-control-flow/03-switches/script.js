const d = new Date(2024, 7, 10, 15, 0, 0);
const month = d.getMonth();
const hour = d.getHours();

//Immediate value evalution
switch (month) {
  case 1:
    console.log("It is january");
    break;
  case 2:
    console.log("It is February");
    break;
  case 3:
    console.log("It is March");
    break;
  default:
    console.log("It is not Jan, Feb or March");
}

// Range evaluation
switch (true) {
  case hour < 12:
    console.log("Good Morning");
    break;
  case hour < 18:
    console.log("Good Afternoon");
    break;
  default:
    console.log("Good Night");
}
