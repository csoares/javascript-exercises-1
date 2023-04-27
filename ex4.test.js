let largest = require("./ex4.js");

test('Test find the largest number ', () => {
    expect(largest(1, 2, 3)).toBe(3);
    expect(largest(3, 2, 1)).toBe(3);
    expect(largest(1, 3, 2)).toBe(3);
    expect(largest(3, 3, 3)).toBe(3);
    expect(largest('3', 1, 2)).toBe(3);

})


test('Test invalid arguments', () => {
    expect(largest('a', 'b', 'c')).toBe(undefined);
})