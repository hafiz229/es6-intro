const numbers = [23, 34, 55, 32, 54];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

const numbers2 = [...numbers, 99];
numbers.push(55);
console.log(numbers, numbers2); // numbers2 will have 55 too due to references
