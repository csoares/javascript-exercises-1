let capitalizeStr = require("./ex5.js");

test('Test find the largest number ', () => {
    expect(capitalizeStr('ola mundo da programação javascript!')).toBe('Ola Mundo Da Programação Javascript!');
})