const animal = ["dog", "cat", "cow"]
const insect = ["ant", "butterfly"]
// animal.push(insect)

// console.log(animal);
// console.log(animal[3][1]);

// const names = animal.concat(insect)//combines two or more arrays
// console.log(names);

const allName = [...animal, ...insect]//preferred over concat
// console.log(allName)

const numbers = [1, 3, [22, 4, 6], 5, [4, 5, [34, 9], 9, 8]]
const new_number = numbers.flat(Infinity)
// console.log(new_number)

// console.log(Array.isArray("CAT"));// false-> to check if particular value, etc is an array  or not
// console.log(Array.from("CAT"));// to make it an array
// console.log(Array.from({name: "Cat"}));// []-> gives an empty array, unable to convert it to array

const score1 = 2
const score2 = 43
const score3 = 45

console.log(Array.of(score1, score2, score3))// [2, 43, 45]
