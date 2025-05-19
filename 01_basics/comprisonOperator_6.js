console.log("4"> 3);
console.log("4"> "3");
console.log("4a"> 3);

console.log(null > 0);// false-> comparison converts null to a number(0)
console.log(null == 0);//false-> equality does not converts null to a number(0)
console.log(null >= 0);//true-> comparison converts null to a number(0)

console.log("2" == 2);// true
console.log("2" === 2);// false, not only data but also the data type is checked->strict checking

