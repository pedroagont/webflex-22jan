const students = ['Laraib', 'Kim', 'Krisan', 'William'];

// console.log(students);
// console.log(students[0]);
// console.log(students[1]);

// trad c loop syntax
// for (let i = 0; i < students.length; i++) {
//   const student = students[i];
//   console.log(student);
// }

// modern js for of syntax
// for (const student of students) {
//   console.log(student);
// }

const logEach = (array) => {
  for (const item of array) {
    console.log(item);
  }
};

logEach(students);

const numbers = [123, 100, 666];
logEach(numbers);

// implemeting forEach
const forEach = (array, action) => {
  for (const item of array) {
    action(item);
  }
};

const forEachResult = forEach(students, (st) => console.log(`${st} is happy!`));
console.log(forEachResult);
// students.forEach()

// implemeting a map
const map = (array, action) => {
  const result = [];

  for (const item of array) {
    result.push(action(item));
  }

  return result;
};

const mapResult = map(students, (st) => `${st} is happy!`);
console.log(mapResult);
// students.map()

// implementing filter
const filter = (array, action) => {
  const result = [];

  for (const item of array) {
    if (action(item)) {
      result.push(item);
    }
  }

  return result;
};

const ages = [15, 22, 55, 30, 32, 6, 19];

const adults = filter(ages, (n) => n >= 18);
const kids = filter(ages, (n) => n < 18);
console.log(adults);
console.log(kids);
