let score = 3
let id = "3ef4"
console.log(typeof(score));
console.log(typeof(id));

let valueInNo = Number(id)
console.log(typeof valueInNo);
console.log(valueInNo);

score = null
console.log(typeof score);

score = undefined
console.log(typeof score);

let isvaluebool = 1
let checkIsvaluebool = Boolean(isvaluebool)
console.log(checkIsvaluebool);

isvaluebool = ""
checkIsvaluebool = Boolean(isvaluebool)
console.log(checkIsvaluebool);

isvaluebool = "hdsf"
checkIsvaluebool = Boolean(isvaluebool)
console.log(checkIsvaluebool);


//'only numbers' in quote can be easily converted "21" but not "2a"
//NaN-> Not a Number

//Boolean
//true-> 1 false-> 0
//string is also considered as false

let someNum = 24
let stringNum = String(someNum)
console.log(stringNum);
console.log(typeof stringNum);

