let diferenceCalculator = require("./ex2.js");

test('Test difference calculator ', () => {

    expect(diferenceCalculator(5)).toBe(-8);
    expect(diferenceCalculator(15)).toBe(4);

})


test('Test invalid arguments', () => {
    expect(diferenceCalculator('a')).toBe(undefined);
})