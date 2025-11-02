const {
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
} = require('./lab.js');

// Mock console.log and other functions to test output
global.console = { log: jest.fn(), error: jest.fn() };
jest.useFakeTimers();

describe('Task 1: makeCounter', () => {
  it('should create independent counters', () => {
    const counter1 = makeCounter();
    const counter2 = makeCounter();
    expect(counter1()).toBe(1);
    expect(counter1()).toBe(2);
    expect(counter2()).toBe(1);
  });
  it('should start from a specific value and increment by a specific amount', () => {
    const counter = makeCounter(5, 2);
    expect(counter()).toBe(7);
    expect(counter()).toBe(9);
  });
});

describe('Task 2: getOrder', () => {
  it('should return the correct order of printed messages', () => {
    const expectedOrder = [
      '#4: Not delayed at all',
      '#3: Delayed by 0ms',
      '#2: Delayed by 20ms',
      '#1: Delayed by 100ms',
    ];
    expect(getOrder()).toEqual(expectedOrder);
  });
});

describe('Task 3: debounce', () => {
  it('should only call the debounced function once after the delay', () => {
    const mockFunc = jest.fn();
    const debouncedFunc = debounce(mockFunc, 1000);
    debouncedFunc();
    debouncedFunc();
    debouncedFunc();
    jest.advanceTimersByTime(1000);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});

describe('Task 4: printFibonacci', () => {
  it('should print the Fibonacci sequence up to the limit', () => {
    console.log.mockClear();
    printFibonacci(5);
    jest.advanceTimersByTime(5000);
    expect(console.log).toHaveBeenCalledTimes(5);
    expect(console.log).toHaveBeenCalledWith(1);
    expect(console.log).toHaveBeenCalledWith(8);
  });
});

describe('Task 5: fixCar', () => {
  it('should return a bound function that works with setTimeout', () => {
    console.log.mockClear();
    const car = {
      make: 'Porsche',
      model: '911',
      year: 1964,
      description() {
        console.log(`This is a ${this.make}`);
      },
    };
    const boundDescription = fixCar(car);
    setTimeout(boundDescription, 200);
    jest.advanceTimersByTime(200);
    expect(console.log).toHaveBeenCalledWith('This is a Porsche');
  });
});

describe('Task 6: Function.prototype.delay', () => {
  it('should delay the execution of a function', () => {
    const multiply = (a, b) => a * b;
    const delayedMultiply = multiply.delay(500);
    const mockCallback = jest.fn();
    delayedMultiply(5, 5).then(mockCallback);
    jest.advanceTimersByTime(500);
    expect(mockCallback).toHaveBeenCalledWith(25);
  });
});

describe('Task 7: Classes and Inheritance', () => {
  it('PrecisionClock should tick at the specified precision', () => {
    console.log.mockClear();
    const pClock = new PrecisionClock('p-clock:', 500);
    pClock.start();
    jest.advanceTimersByTime(1000);
    pClock.stop();
    expect(console.log).toHaveBeenCalledTimes(3); // start + 2 ticks
  });
  it('AlarmClock should log "Wake Up!" at the wakeup time', () => {
    console.log.mockClear();
    const date = new Date();
    date.setHours(7, 0, 0);
    const aClock = new AlarmClock(
      'a-clock:',
      `${date.getHours()}:${date.getMinutes()}`
    );
    aClock.start();
    jest.advanceTimersByTime(1000);
    aClock.stop();
    expect(console.log).toHaveBeenCalledWith('Wake Up!');
  });
});

describe('Task 8: validateStringArgs', () => {
  // This is the function the student is expected to wrap
  const orderItems = (...items) => `Order placed for: ${items.join(', ')}`;

  // This is the function students will complete
  const validatedOrderItems = validateStringArgs(orderItems);

  it('should return the correct string when all arguments are strings', () => {
    // This test will FAIL with the starter code because it returns undefined
    // instead of the expected string.
    const result = validatedOrderItems('Apple Watch', 'iPhone');
    expect(result).toBe('Order placed for: Apple Watch, iPhone');
  });

  it('should throw a TypeError if any argument is not a string', () => {
    // This test will now correctly FAIL with the starter code because
    // the empty function does not throw an error.
    expect(() => {
      validatedOrderItems('Apple Watch', 123);
    }).toThrow(TypeError);
  });
});

describe('Task 9: randomDelay', () => {
  it('should return a promise that resolves or rejects', async () => {
    // This is tricky to test deterministically. We'll just check if it returns a promise.
    expect(randomDelay()).toBeInstanceOf(Promise);
  });
});

describe('Task 10: fetchURLDataAsync', () => {
  it('should fetch data successfully using async/await', async () => {
    const data = await fetchURLDataAsync(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    expect(data.id).toBe(1);
  });
  it('should handle errors for invalid URLs using async/await', async () => {
    await expect(fetchURLDataAsync('invalid-url')).rejects.toThrow();
  });
});
