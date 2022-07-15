var x = true; // var must not be used
let number = 10;
let number2 = "20";
const name = "juan";

let number2 = 20;
let result = number + number2;


console.log("result:",result);

number = 20;
// name = "pedro";
console.log("number: ",number);
number = 50;
console.log("number: ",number);


console.log("result", result);

number = 20;

// name = "pedro"; // this is an error, const is not reasignable
console.log("number: ", number);

number = "10";

console.log("number: ", number);


console.log("Variables: ", x, number, name);