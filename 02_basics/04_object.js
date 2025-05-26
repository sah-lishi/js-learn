// singleton objects
// const user1 = new Object()

//  non singleton object
const user2 = {}
user2.name = "Lishi"
user2.location = "Mizoram"

// console.log(user2);

const user3 = {
    email: "hhhh@gmail.com",
    fullName: {
        userFullname: {
            firstName: "Lishi",
            lastName: "Sah"
        }
    }
}

// console.log(user3.fullName.userFullname);

// combining objects

const obj1 = { 1: "a", 2: "B"}
const obj2 = { 3: "C", 4: "D"}
// const obj3 = {obj1, obj2}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);
// or
const obj4 = {...obj1, ...obj2}// most prefferred
// console.log(obj4);
// array of objects
const users = [
    {
        id: 1,
        email: "hhj@gmail.com"
    },
    {
        id: 2,
        email: "hhj@gmail.com"
    }
]
// console.log(users[1].id);


 