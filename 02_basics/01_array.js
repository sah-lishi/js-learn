const myArr = [4, 6, 8]
// console.log(myArr[2]);

const str = ["apple", "mango"]
const myArr2 = new Array(2, 4, 4, 23, 87)
// console.log(myArr2[0]);
// methods
myArr2.push(5)
myArr2.pop()
// console.log(myArr2);

myArr2.unshift(57)
myArr2.shift()
// console.log(myArr2);

// console.log(myArr2.includes(1));// false-> returns boolean 
// console.log(myArr2.indexOf(4));
// console.log(myArr2.indexOf(6));// -1

const myArr3 = myArr2.join()// binds all elements of array(myArr2) and converts myArr3 to string type
// console.log(myArr3);
// console.log(typeof(myArr3));

// slice and splice
const myArr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log("Original: ", myArr4);
const arrSlice = myArr4.slice(2, 7)// To copy a portion of an array into a new array, without modifying the original.
console.log("slice operation: ", arrSlice);
console.log("Original: ", myArr4);
const arrSplice = myArr4.splice(2, 7)// To change the original array by adding, removing, or replacing elements.
console.log("splice operation: ", arrSplice);
console.log("Original: ", myArr4);