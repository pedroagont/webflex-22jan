// Function as a value

// Types of values
// primitive: strings, numbers, booleans
// mutable: arrays, objects

function sayHelloTradDeclaration() {
  console.log('Hello from trad! 👋');
}

const sayHelloFuncExpression = function () {
  console.log('Hello from fn expression! 👋');
};

// sayHelloTradDeclaration();
// sayHelloFuncExpression();

const greetings = function () {
  console.log('greetings!');
};

const somethingElse = greetings;

// somethingElse();

const myFunction = function () {
  console.log('Hello from myFunction!');
};

const runMyFunction = function (action) {
  //   console.log(typeof action);
  if (typeof action !== 'function') {
    return console.log('action is not a function');
  }

  console.log('About to run action!');
  action();
};

const addNumbers = function () {
  console.log(10 + 10);
};

// runMyFunction(myFunction);
// runMyFunction(() => console.log('greetings arrow!'));
// runMyFunction(() => console.log(10 + 10));
// runMyFunction(function () {
//   console.log('greetings trad decl!');
// });

const addTwo = (number) => {
  console.log(number + 2);
};

runMyFunction(addNumbers);
runMyFunction(() => addTwo(10));
