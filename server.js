const { clone } = require("@sanampakuwal/utils");

const arr = [1, 2, 3];
const newArr = clone(arr);
console.log(newArr);

// node .\server.js >> [ 1, 2, 3 ]
