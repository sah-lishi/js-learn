const num = 4432
console.log(num);

const balance = new Number(765300)
console.log(balance);// [Number: 765300]
console.log(balance.toString());// 765300 -> returns a string representation of an object
console.log(balance.toLocaleString('en-IN'));
 
const num2 = 8453.859
console.log(num2.toPrecision(5));

//_________________________________MATH_________________________________________

console.log(Math);
console.log(Math.abs(-65));
console.log(Math.round(56.76));
console.log(Math.floor(4.8));//4
console.log(Math.ceil(4.8));
console.log(Math.min(4, 34, 2, 8));
console.log(Math.max(4, 8));

console.log(Math.random());//generates random no between 0 to 1
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min + 1)) + min);