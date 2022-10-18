console.log(`Equality or inequality${" true" === "true"}`);
console.log(`Equality or inequality${" true" === "false"}`);

console.log(
  `Equality or inequality${"true".toLowerCase() === "true".toLowerCase()}`
);
console.log(
  `Equality or inequality${"true".toLowerCase() === "false".toUpperCase()}`
);

console.log(`Numerical tests: ${7 > 2 === 3 < 5}`);
console.log(`Numerical tests: ${7 >= 2 === 3 <= 5}`);
console.log(`Numerical tests: ${((7 == 2) === 3) == 5}`);

console.log(`OR test: ${"usman" || "USMAN" === "usman"}`);
console.log(`AND test: ${"usman" && "USMAN" === "usman"}`);

const array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(`Test whether an item is in a array: ${array.includes(5)}`);
console.log(`Test whether an item is not in a array: ${array.includes(15)}`);
