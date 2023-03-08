// 1. Array.concat()

// Concatenate the two arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8, 9];
// // const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Solution

// const arr3 = arr1.concat(arr2);
// console.log(arr3);


// 2. How to take arguments in sum function?

// Solution

// function sum(...args) {
//     return args.reduce((sum, current) => {
//          return sum + current;
// });
// }
// console.log(sum(1, 2)); // prints 3
// console.log(sum(1, 2, 3)); // prints 6

// 3. How to pass arguments in sum function?

// Solution

// function sum(numbers) {
//     return numbers.reduce((sum, current)=>{
//         return sum + current;
//     })
// }
// const numbers = [1, 2, 3];
// console.log(sum(numbers)); // prints 6

// 4. Swapping Values using the Destructuring Assignment

// let a = 3;
// let b = 6;

// Solution

// [a, b] = [b, a];
// console.log(a); //6
// console.log(b); //3

// 5. Reduce
// Your function must use reduce

// - Given an array, return the sum of numbers that are 18 or over.

// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]

// Solution

// function sumOfNumbersEqualToOrOverEighteen(arr){
//     return arr.filter((item) => item >= 18).reduce((sum, current) =>{
//         return sum + current;
//     })
// }

// console.log(sumOfNumbersEqualToOrOverEighteen(arr));

// // 22 + 55 + 166 + 36 + 205 + 333 + 95 + 62 + 43 = 1017

// 6.- Write a function which calculates average age of users.

// const users = [{_, _,age}] = [
// {
// username: "Yuri Gagarin",
// lang: "ru",
// age: 56,
// },
// {
// username: "Nil Armstrong",
// lang: "ENG",
// age: 54,
// },
// ];

// Solution

// function getAverageAge(users){
//     return users.map((user) => user.age).reduce((sum, current) => {
//         return (sum + current)/users.length;
//     })
// }

//  console.log(getAverageAge(users)); // 55;


// 7.  Filter
// Your functions must use filter method

// - Given an array, return a new array that only includes the numbers.

// const arr = [1, 2, 'a', true, {}, undefined, 55, false, 'hi', null,
// 166, NaN]
// // [1, 2, 55, 166]

// Solution

// function getNumbersFromArray(arr){
//     return arr.filter((item) => item / 1 === item);
// }

// console.log(getNumbersFromArray(arr));


// 8. - Write a function which remove users with language equals to 'ru'.

// const users = [{_, lang}] = [
// {
//     username: "Yuri Gagarin",
//     lang: "ru",
// },
// {
//     username: "Nil Armstrong",
//     lang: "ENG",
// },
// ];

// filterUsers(users); // [{ username: "Nil Armstrong, lang: "ENG" }]

// Solution

// function filterUsers(arr){
//     return users.filter((user) => user.lang !== "ru");
// }

// console.log(filterUsers(users));


// 9.- Write a function which filters object by field.

// const users = [{_,_,isAstronaut}] = [
// {
//     username: "Yuri Gagarin",
//     lang: "ru",
//     isAstronaut: true,
// },
// {
//     username: "Nil Armstrong",
//     lang: "ENG",
//     isAstronaut: true,
// },
// {
//     username: "Elon Musk",
//     isAstronaut: false,
// },
// ];
// filterByField(users, "isAstronaut"); // [{ username: "Yuri Gagarin",
// lang: "ru", isAstronaut: true, }, { username: "Nil Armstrong, lang: "ENG"
// }]

// Solution

// function filterByField(arr){
//     return users.filter((user)=> user.isAstronaut);
// }

// console.log(filterByField(users));

// 10. Map
// Your function must use map method

// - Write a function which returns array of usernames.

// const users =[{username}] = [
// {
//     username: "Yuri Gagarin",
//     lang: "ru",
// },
// {
//     username: "Nil Armstrong",
//     lang: "ENG",
// },
// ];
// getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']

// Solution

// function getUserNames(arr){
//     return arr.map((user) => user.username)
// }

// console.log(getUserNames(users));


// 11. - Write a function which returns array of lengths of user names

// const users = [{username}] = [
// {
//     username: "Yuri Gagarin",
//     lang: "ru",
// },
// {
//     username: "Nil Armstrong",
//     lang: "ENG",
// },
// ];
// getUsernameLengths(users); // [12, 13]

// Solution

// function getUsernameLengths(arr){
//     return arr.map((user) => user.username.length);
// }

// console.log(getUsernameLengths(users));



// 12. - Write a function which parses string integers. If it's not possible to
// parse, then add null

// Solution

// function parseInteger(arr){
//     return arr.map((item) => +item || null);
// }

// console.log(parseInteger(["1", "2", "34"])); // [1, 2, 34];
// console.log(parseInteger(["1", "px", "2323"])); // [1, null, 2323];


// 13. SORT
// Your function must use sort method

// - Create a function that takes an array of numbers arr, a string str
// and return an array of numbers as per the following rules:

// - "Asc" returns a sorted array in ascending order.
// - "Desc" returns a sorted array in descending order.

// Solution

// function sortBy(arr, sortType){
//     switch(sortType){
//         case "Asc":
//             return arr.sort((a, b) => a - b);
//         case "Desc":
//             return arr.sort((a, b) => b - a);
//         default:
//             return arr;
//     }
// }

// console.log(sortBy([4, 3, 2, 1], "Asc" )) // [1, 2, 3, 4]
// console.log(sortBy([7, 8, 11, 66])) // [7, 8, 11, 66]
// console.log(sortBy([7, 8, 11, 66], "Desc")) // [66, 11, 8, 7]