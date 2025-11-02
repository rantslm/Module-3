// 1. Capitalize Words
function capitalizeWords(str) {
  // Your code here
let result = '';
let capitalizeNext = true; // to capitalize the first letter of next word
for (let i = 0; i < str.length; i++) { // iterate through each character
  let char = str[i];
  const code = char.charCodeAt(0);
  if (capitalizeNext && code >= 97 && code <= 122) {
    char = String.fromCharCode(code - 32);
    capitalizeNext = false;
  } else if (code === 32) { // if it's a space
    capitalizeNext = true;
  } else { // any other character
    capitalizeNext = false;
  }
  result += char; 
}
return result;
}

// 2. Truncate String
function truncate(str, maxLength) {
  //see if string is longer than the max
  return str.length > maxLength
  //if true (longer) then shorten and add ellipses and if not then return as is
  ? str.slice(0, maxLength - 3) + "..."
  : str;
}

// 3. Array Manipulation
function arrayManipulation(startArray, middleValue, begin1, begin2, end1, end2) {
  let animals = [...startArray]; // animals = ['Tiger', 'Giraffe']
  // a) Add two new values to the end
  animals.push(end1, end2);
  //animals = ['Tiger', 'Giraffe', 'Lion', 'Zebra']

  // b) Add two new values to the beginning
  animals.unshift(begin1, begin2);
  // animals = ['Bear', 'Elephant', 'Tiger', 'Giraffe', 'Lion', 'Zebra']

  // c) Sort the values alphabetically. it will sort alphabetically by default
  animals.sort();
  // animals = ['Bear', 'Elephant', 'Giraffe', 'Lion', 'Tiger', 'Zebra']

  // d) Replace the middle element with 'Calf'
  const middleIndex = animals.length % 2 === 0
  ? Math.trunc(animals.length / 2) - 1
  : Math.trunc(animals.length / 2);
  animals[middleIndex] = middleValue;
  //animals = ['Bear', 'Elephant', 'Giraffe', 'Calf', 'Tiger', 'Zebra']

  return animals;
}

// 4. Camel Case Conversion 
function camelCase(cssProp) {
  return cssProp
  .split('-') 
  .map((word, index) =>
  index === 0 //lowercase first word and rest are capitalized
? word
: word.charAt(0).toUpperCase() + word.slice(1) //capitalize only the first letter then the rest of the word
)
.join(''); // put back together
}

// 5. Floating-Point Precision
const currencyOperation = (float1, float2, operation, numDecimals = 2) => {
const result =

operation === '+' ? float1 + float2 :
operation ==='-' ? float1 - float2 :
operation === '*' ? float1 * float2 :
operation === '/' ? float1 / float2 : NaN;

return parseFloat(result.toFixed(numDecimals));
};


// 6. Find Unique Values
function unique(duplicatesArray) {
  return [...new Set(duplicatesArray)];
}

// 7. Advanced Array Methods
function processBooks(books) {
  // a) Get the title of the book with id 1
  const bookTitleWithId1 = books.find((book) => book.id === 1).title;
  // b) Get all book objects written before 1950
  const oldBooks = books.filter((book) => book.year < 1950);
  // c) Add a new genre property to each book with the value 'classic'
  book.forEach((book) => {
    book.genre = 'classic';
  });

  const booksWithGenre = books;
  // map version
  // const booksWithGenre = book.map((book) => ({ ...book, genre: 'classic'}));
  return {
    bookTitleWithId1,
    oldBooks,
    booksWithGenre,
  };
}

// 8. The Map Object
function managePhoneBook(phoneBookABC, phoneBookDEF, newCarolineNumber) {
  // Update Caroline's number in phoneBookABC.
  phoneBookABC.set('Caroline', newCarolineNumber);
  // Combine the two maps into a single new map.
  const combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);
  // Return the new combined map.
  return combinedPhoneBook;
}

// 9. Working with Object Data
function processSalaries(salaries) {
  // calculate the total of all salaries, object.values(salaries) gets an array of salaries, reduce sums them from 0
  const totalSalaries = Object.values(salaries).reduce((sum, salary) => sum + salary, 0); 
  //object.keys same as above but with names, reduce compares to keep the name of highest paid employee
  const topEarner = Object.keys(salaries)
  .reduce((a, b) => (salaries[a] > salaries[b] ? a : b), ''); // a being the top earner and b being the new individual, start w empty string

  return { totalSalaries, topEarner };

}

// 10. The Date Object
function processDate(date) {
  const today = new Date(date);

  // a) Get total minutes passed today
  const minutesPassed = 0;
  // b) Get total seconds passed today
  const secondsPassed = 0;
  // d) Calculate days between today and a future date
  const futureDate = new Date('2025-12-31');
  const daysBetween = 0;

  return {
    minutesPassed,
    secondsPassed,
    daysBetween,
  };
}


// Do not modify this line. This is the mechanism that allows your code to be tested.
module.exports = {
  capitalizeWords,
  truncate,
  arrayManipulation,
  camelCase,
  currencyOperation,
  unique,
  processBooks,
  managePhoneBook,
  processSalaries,
  processDate,
};