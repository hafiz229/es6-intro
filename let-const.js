// break up with var
let balance = 1240;
balance = 1340;
const userName = "You can't change it";

const numbers = [45, 23, 89, 60];
// numbers = [99, 45, 43]; // not allowed
numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
  sum = sum + number;
}

const student = { roll: 344, name: "Karim", job: "intern" };
student.name = "Sakib";
// student = {name: "sazzad"}
