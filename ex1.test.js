let cToF = require("./ex1.js");
test('Test celsius to fahrenheit ', () => {
    expect(cToF(60)).toBe(140);
    expect(cToF('60')).toBe(140);
})


test('Test invalid arguments', () => {
    expect(cToF('a')).toBe(undefined);
})