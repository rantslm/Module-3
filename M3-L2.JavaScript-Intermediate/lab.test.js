const {
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
} = require('./lab.js');

describe('Task 1: capitalizeWords', () => {
  it('should capitalize the first letter of each word', () => {
    expect(capitalizeWords('los angeles')).toBe('Los Angeles');
    expect(capitalizeWords('new york city')).toBe('New York City');
  });
});

describe('Task 2: truncate', () => {
  it('should truncate a string if it exceeds the max length', () => {
    const longStr = 'This text will be truncated if it is too long';
    expect(truncate(longStr, 25)).toBe('This text will be truncat...');
  });
  it('should not truncate a string if it is within the max length', () => {
    const shortStr = 'Short text';
    expect(truncate(shortStr, 25)).toBe('Short text');
  });
});

describe('Task 3: arrayManipulation', () => {
  it('should correctly manipulate the array', () => {
    const initialArray = ['Tiger', 'Giraffe'];
    const expected = ['Bear', 'Elephant', 'Calf', 'Lion', 'Tiger', 'Zebra'].sort();
    const result = arrayManipulation(initialArray, 'Calf', 'Bear', 'Elephant', 'Lion', 'Zebra').sort();
    // Sort both for consistent comparison
    expect(result).toEqual(expected);
  });
});

describe('Task 4: camelCase', () => {
  it('should convert dash-separated strings to camel case', () => {
    expect(camelCase('margin-left')).toBe('marginLeft');
    expect(camelCase('background-image')).toBe('backgroundImage');
    expect(camelCase('display')).toBe('display');
  });
});

describe('Task 5: currencyOperation', () => {
  it('should correctly add decimal numbers', () => {
    expect(currencyOperation(0.1, 0.2, '+')).toBe(0.3);
  });
  it('should correctly subtract decimal numbers', () => {
    expect(currencyOperation(0.3, 0.1, '-')).toBe(0.2);
  });
  it('should correctly multiply decimal numbers with specified decimals', () => {
    expect(currencyOperation(0.1, 0.2, '*', 3)).toBe(0.02);
  });
});

describe('Task 6: unique', () => {
  it('should return an array with only unique values', () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
    expect(unique(colors)).toEqual(expect.arrayContaining(['red', 'green', 'blue', 'yellow', 'orange']));
  });
});

describe('Task 7: processBooks', () => {
  const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  ];
  const results = processBooks(books);

  it('should find the correct book title by ID', () => {
    expect(results.bookTitleWithId1).toBe('The Great Gatsby');
  });
  it('should filter for books written before 1950', () => {
    expect(results.oldBooks.length).toBe(2);
    expect(results.oldBooks.some(b => b.year === 1925)).toBe(true);
  });
  it('should add a genre property to all books', () => {
    expect(results.booksWithGenre.every(b => b.genre === 'classic')).toBe(true);
  });
});

describe('Task 8: managePhoneBook', () => {
  const phoneBookABC = new Map([['Annabelle', '0412312343'], ['Caroline', '0455221182']]);
  const phoneBookDEF = new Map([['David', '0444555666']]);
  const newCarolineNumber = '0400000000';
  const combined = managePhoneBook(phoneBookABC, phoneBookDEF, newCarolineNumber);

  it('should contain all contacts from both maps', () => {
    expect(combined.has('Annabelle')).toBe(true);
    expect(combined.has('David')).toBe(true);
  });
  it('should have the updated number for Caroline', () => {
    expect(combined.get('Caroline')).toBe(newCarolineNumber);
  });
});

describe('Task 9: processSalaries', () => {
  const salaries = { "Timothy": 35000, "David": 25000, "Mary": 55000, "Christina": 75000 };
  const results = processSalaries(salaries);

  it('should calculate the correct total salary', () => {
    expect(results.totalSalaries).toBe(190000);
  });
  it('should find the top earner', () => {
    expect(results.topEarner).toBe('Christina');
  });
});

describe('Task 10: processDate', () => {
  // Mock a specific date for consistent testing
  // Let's use 10:30:00 AM on a specific date
  const testDate = new Date('2025-10-11T10:30:00');
  const results = processDate(testDate);

  it('should calculate the correct number of minutes passed', () => {
    expect(results.minutesPassed).toBe(10 * 60 + 30); // 630
  });
  it('should calculate the correct days between two dates', () => {
    expect(results.daysBetween).toBe(81); // Days between Oct 11 and Dec 31
  });
});