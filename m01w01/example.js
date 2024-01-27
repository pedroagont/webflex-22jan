// Problem:
// - Write a node program that takes in an unlimited number
//   of command line arguments and prints out the sum of them.
// - If any argument is not a whole number, skip it.
// - Do not support negative numbers though.

// node example.js 1 hello 2 -3 3 -> 6

function sumArguments(input) {
  let total = 0;

  for (const arg of input) {
    const converted = Number(arg);

    if (Number.isInteger(converted) && converted > 0) {
      // total = total + converted;
      total += converted;
    }
  }

  return total;
}

const commandLineArgs = process.argv;
const result = sumArguments(commandLineArgs);
console.log(result);
