/*
  Students should complete the following functions.
  You can test your work by running the tests with `npm test`
*/

/**
 * Creates a counter function that starts from a given number and increments by a given step.
 * @param {number} [startFrom=0] - The number to start the counter from.
 * @param {number} [incrementBy=1] - The number to increment the counter by on each call.
 * @returns {function(): number} A function that returns the next number in the sequence.
 */
function makeCounter(startFrom = 0, incrementBy = 1) {
  let count = startFrom;

  return function() {
    count += incrementBy;
    return count;
  };
}

/**
 * Logs a message to the console.
 * @param {string} msg - The message to be logged.
 */
function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

/**
 * Returns the expected order of execution for the setTimeout calls in the test file.
 * @returns {string[]} An array of strings representing the message order.
 */
const getOrder = () => [
  '#4: Not delayed at all',
  '#3: Delayed by 0ms',
  '#2: Delayed by 20ms',
  '#1: Delayed by 100ms',
];

setTimeout(() => delayMsg('#1: Delayed by 100ms'), 100);
setTimeout(() => delayMsg('#2: Delayed by 20ms'), 20);
setTimeout(() => delayMsg('#3: Delayed by 0ms'), 0);

delayMsg('#4: Not delayed at all');

/**
 * Creates a debounced version of a function that delays invoking the function
 * until after `ms` milliseconds have passed since the last time it was invoked.
 * @param {Function} func - The function to debounce.
 * @param {number} ms - The number of milliseconds to delay.
 * @returns {Function} The new debounced function.
 */
function debounce(func, ms) {
  // Your code here
}

/**
 * Prints the Fibonacci sequence up to a specified limit, with a one-second delay
 * between each number.
 * @param {number} limit - The number of Fibonacci numbers to print.
 */
function printFibonacci(limit) {
  // Your code here
}

/**
 * The car object, representing a classic car.
 */
const car = {
  make: 'Porsche',
  model: '911',
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

/**
 * Returns a version of the car's description method that is permanently bound
 * to the car object, ensuring `this` is always correct.
 * @returns {Function} The bound description method.
 */
function fixCar(car) {
  // bind so this refers to car
  return car.description.bind(car);
}

/**
 * Adds a `delay` method to the Function prototype. The delayed function
 * returns a promise that resolves with the function's result after the specified delay.
 * @param {number} ms - The delay in milliseconds.
 * @returns {function(...args): Promise<any>} A new function that will execute after the delay.
 */
Function.prototype.delay = function(ms) {
  const originalFn = this;

  // Return a new function that returns a Promise
  return (...args) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(originalFn(...args)); // resolve with the function's result
      }, ms);
    });
  };
};
//* Represents a digital clock that displays the time every second.
class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) {
      hours = '0' + hours;
    }
    if (mins < 10) {
      mins = '0' + mins;
    }
    if (secs < 10) {
      secs = '0' + secs;
    }

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

/**
 * Represents a clock that ticks at a custom interval.
 * @extends DigitalClock
 */
class PrecisionClock extends DigitalClock {
  // Your code here
}

/**
 * Represents a clock that can be set to sound an alarm at a specific time.
 * @extends DigitalClock
 */
class AlarmClock extends DigitalClock {
  // Your code here
}

/**
 * A decorator function that validates all arguments of a given function are strings.
 * @param {Function} fn - The function to wrap.
 * @returns {Function} A new function that performs validation before calling the original function.
 * @throws {TypeError} If any argument is not a string.
 */
function validateStringArgs(fn) {
  // A decorator returns a new function that wraps the original function.
  return function (...args) {
    for (const arg of args) {
      if (typeof arg !== 'string') {
        throw new TypeError('All arguments must be strings');
      }
    }
    return fn(...args);
  };
}

/**
 * Returns a promise that resolves or rejects after a random delay.
 * @returns {Promise<string>} A promise that resolves with "Resolved!" on an even delay
 * and rejects with "Rejected!" on an odd delay.
 */
function randomDelay() {
  // Your code here
}

/**
 * Fetches data from a URL using async/await and returns the JSON response.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<object>} A promise that resolves with the JSON data.
 */
// You can use the fetchURLData function from the slides as a reference
// and the following import for your tests.
const fetch = require('node-fetch');

async function fetchURLDataAsync(url) {
try {
  const response = await fetch(url);
  if(!response.ok) {
    throw new Error('HTTP error! status: ${response.status}');
  }
  const data = await response.json();
  return data;
} catch (error) {
  console.error('Error fetching data:', error);
  throw error;
}}

// Do not modify this line.
module.exports = {
  makeCounter,
  getOrder,
  debounce,
  printFibonacci,
  fixCar,
  PrecisionClock,
  AlarmClock,
  validateStringArgs,
  randomDelay,
  fetchURLDataAsync,
};
