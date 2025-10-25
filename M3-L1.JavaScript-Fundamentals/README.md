# M3-L1.JavaScript-Fundamentals

Welcome to the JS Fundamentals Lab\! These exercises are designed to test your understanding of JavaScript's core concepts, from type coercion and functions to objects and classes.

---

## 1\. Type Coercion

Predict the result of each expression below, then verify your answer by running the code in the browser console.

```javascript
"" + 1 + 0; //10
true + false; //1
6 / "3"; //2
"2" * "3"; //6
4 + 5 + "px"; //9px
"$" + 4 + 5; //$45
"4" - 2; //2
"4px" - 2; //NaN
"  -9  " + 5; //-95
"  -9  " - 5; //-14
null + 1; //1
undefined + 1; //NaN
" \t \n" - 2;
```

**Bonus:** What is the result of `undefined == null`? What about `undefined === null`? Why?

<!-- undefined==null returns true since they both represent the absence of a value, but
undefine===null returns false because in a stricter sense they are different bc undefined means a variable is unassigned whereas null is assigned as non existent so two different things -->

---

## 2\. String vs. Number Operations

The following code block has some unexpected results and a syntax error.

### Your Tasks:

1.  Fix the syntax error in the `subtraction` variable declaration.
2.  Run the code and observe the results.
3.  Add comments to explain why `addition` and `lessThan2` produce their specific results.

<!-- end list -->

```javascript
let three = "3";
let four = "4";
let thirty = "30";

// What is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four; //
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(addition); // results in 34 due to string concatenation so putting the characters 3 and 4 together
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2); //results in true because of type coercion so three and four turn from strings to numbers and multiply...it does this for all operators except addition
```

---

## 3\. Truthy and Falsy Values

For each `if` statement below, predict whether the message will be logged to the console. Explain your reasoning for each.

```javascript
if (0) console.log("#1: zero is true"); //no because 0 is false
if ("0") console.log("#2: zero string is true"); //yes because the string "0" is true
if (null) console.log("#3: null is true"); //no because null is falsy
if (-1) console.log("#4: negative is true"); //yes because non-zero number
if (1) console.log("#5: positive is true"); //yes because non-zero number
```

---

## 4\. The Ternary Operator

### Your Tasks:

1.  Rewrite the `if/else` statement below using a single line of code with the ternary operator.
2.  In your own words, explain what the `+=` operator does.

<!-- end list -->

```javascript
let a = 2,
  b = 3;
let result = `The sum of ${a} and ${b} is `;

// if (a + b < 10) {
//   result += "less than 10";
// } else {
//   result += "greater than 10";
// }
//the += is used to add any specified value or concatenating a string
let result = `The sum of ${a} and ${b} is ${
  a + b < 10 ? "less than 10" : "greater than 10"
}`;

console.log(result);
```

---

## 5\. Function Syntax

The `getGreeting` function is a classic function declaration. Rewrite it in two other common ways:
a) As a **function expression**.
b) As an **arrow function**.

```javascript
// Original function declaration
function getGreeting(name) {
  return `Hello, ${name}!`;
}

// a) Function expression syntax
const getGreeting = function () {
  console.log("Hello, ${name}!");
};
getGreeting();

// b) Arrow function syntax
const getGreeting = (name) => `Hello, ${name}`;

console.log(getGreeting("World"));
```

---

## 6\. Objects and `this`

This exercise involves completing an object that represents a character from _The Princess Bride_.

### Your Tasks:

a) Complete the `inigo` object by adding a `lastName` property.
b) Update the `greeting` method to include the `lastName` in the introduction.
c) Complete the `getCatchPhrase` method. If the `person` object has `numFingers: 6`, it should return his famous catchphrase. Otherwise, it should return a generic greeting.
d) **Bonus:** Rewrite the `getCatchPhrase` method using arrow function syntax and a ternary operator.

```javascript
const westley = {
  name: "Westley",
  numFingers: 5,
};

const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};

const inigo = {
  firstName: "Inigo",
  lastName: "Montoya",
};

  greeting(person) {
    let greeting = `Hello, ${person.name}. My name is ${this.firstName} ${this.lastName}.`; // b) Update this greeting
    console.log(greeting + this.getCatchPhrase(person));
  },
  const getCatchPhrase = (person) => person.numFingers ===6
  ? "you don't by any chance happen to have 6 fingers on your right hand?"
  : "Nice to meet you.";


inigo.greeting(westley);
inigo.greeting(rugen);
```

---

## 7\. Method Chaining

The `basketballGame` object tracks the score of a game.

### Your Tasks:

a) Modify each of the scoring methods (`freeThrow`, `basket`, `threePointer`) so that they can be "chained" together. (Hint: what should each method `return`?)
b) Add a `fullTime` method that prints the final score.
c) Add a `fouls` property and a method to increment it. Include the foul count in the `halfTime` and `fullTime` messages.
d) Test your object by chaining all the method calls together in different combinations.

````javascript
const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this;
  },
  basket() {
    this.score += 2;
    return this;
  },
  threePointer() {
    this.score += 3;
    return this;
  },
  foul() {
    this.fouls ++;
    return this;
  },
  }
  halfTime() {
    console.log(`Halftime score is ${this.score}.`);
    return this;
  },
  fulltime() {
    console.log(`Final score is ${this.score}, Fouls: ${this.fouls}`);
    return this;
};

// Modify the methods to enable chaining like this:
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .basket()
  .threePointer()
  .halfTime();
const score = basketballGame.basket().freeThrow().threePointer().halfTime();
console.log(score);
---

## 8\. Iterating Over Objects

### Your Tasks:

a) Write a function that takes an object as an argument and uses a `for...in` loop to access and print each of its properties and values to the console.
b) Test your function using the `sydney` object.
c) Create a new object for a different city and test the function again.


const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const manila ={
  name: "manila",
  population: 1_780_000,
  country: "Philippines",
  founded: "24 June 1571",
  timezone: "Asia/Manila",
};
function printProps(obj) {
  for (let key in obj){
    console.log(`${key}: ${obj[key]}`);
  }
}


---

## 9\. Primitives vs. Reference Types

This exercise explores how JavaScript stores objects and primitives by reference vs. by value.

### Your Tasks:

a) Create `moreSports` equal to `teamSports` and add new sports to `moreSports`.
b) Create `dog2` equal to `dog1` and give `dog2` a new value.
c) Create `cat2` equal to `cat1` and change `cat2`'s `name` property.
d) Print the original `teamSports`, `dog1`, and `cat1` variables to the console. Have they changed? Explain why or why not in a comment.
e) Refactor the code for `moreSports` and `cat2` to create _true copies_, so the original variables remain unchanged. (Hint: look up the spread operator `...`).

```javascript
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let dog1 = "Bingo";
let cat1 = { name: "Fluffy", breed: "Siberian" };
//create a copy so we don't also change teamSports
let moreSports = [...teamSports];
//add sports
moreSports.push("Football","Baseball");
//similar process for dog but without spread bc it a string
let dog2 = dog1;
dog2 = "Bluey";
//cat1 is a reference type
let cat2 = {...cat1};
cat2.name="Winston";
```

---

## 10\. Constructor Functions vs. Classes

This exercise compares two ways of creating objects in JavaScript.

### Your Tasks:

a) Create two new people using the `Person` constructor function.
b) Rewrite the constructor function as a `class` called `PersonClass`.
c) Create a third person using the `PersonClass`.
d) Add a `canDrive` method to both the constructor function's `prototype` and the class. The method should return `true` if the person's `age` is 16 or older.

```javascript
// Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;
}
const person1 = new Person("Mia", 24);
const person2 = new Person("Naomi", 22);

console.log(person1);
console.log(person2);

// Class Syntax
// b) Rewrite the constructor as a class
class PersonClass {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.human = true;
  }
}
const person3 = new PersonClass("Carina", 15);
console.log(person3);

PersonClass.prototype.canDrive =function(){
  return this.age .= 16;
};

console.log(person3.canDrive()); //false
console.log(person2.canDrive()); //true

```

---

## Bonus Challenge

If you have time, test your skills with the **JS Challenger Rush** game: [https://www.jschallenger.com/games/rush](https://www.jschallenger.com/games/rush)
````
