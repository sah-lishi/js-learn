// object literals
const mySym = Symbol("key33")
const myObject = {
    name: "Lishi",
    color: "blue",
    age: 23,
    email: "lishi@gmail.com",
    [mySym]: "my symbol value",
    isLoggedIn: true 
}
// console.log(myObject)

// Object.freeze(myObject)// so that values can't be changed

// myObject.email = "hdhsk@gmail.in"
// console.log(myObject.email);

myObject.myfunction1 = function () {
    return `This is my function1, ${this.age}`;
}
console.log(myObject.myfunction1());
