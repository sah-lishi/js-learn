// primitive data types
// String, Number, Boolean, null, undefined, Symbol, BigInt
const score = 5
const isLogged = false
let userEmail;

const id = Symbol('234')
const secId = Symbol('234')
console.log(id === secId);
console.log(typeof secId);


// Reference(non primitive) data type
// Array, Objects, Functions
const fruits = ["mango", "guava", "watermelon"]
console.log(fruits);

let myObject = {
    name: "Lishi",
    age: "59"
}

const myFunction = function () {
    console.log("Hello");
}
