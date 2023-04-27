let checkNumber = require("./ex3.js");

test('Test check number sum or 50 ', () => {
    expect(checkNumber(5, 45)).toBe(true);
    expect(checkNumber(50, 1)).toBe(true);
    expect(checkNumber(2, 45)).toBe(false);
    expect(checkNumber('2', 45)).toBe(false);
    expect(checkNumber('2', '50')).toBe(true);
    expect(checkNumber(2, '50')).toBe(true);
    expect(checkNumber('1', '49')).toBe(true);
})


test('Test invalid arguments', () => {
    expect(checkNumber('a', '50')).toBe(undefined);
    expect(checkNumber('a', 'a')).toBe(undefined);
})