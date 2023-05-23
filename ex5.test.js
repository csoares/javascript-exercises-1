let capitalizeStr = require("./ex5.js");

test("Test to check the string ", () => {
  expect(capitalizeStr(" ola    mundo da programação javascript!")).toBe(
    "Ola Mundo Da Programação Javascript!"
  );
});
