// 1. Array.concat()

// Concatenate the two arrays
// const arr1 = [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8, 9];
// // const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// const arr3 = arr1.concat(arr2);
// console.log(arr3);


// 2. How to take arguments in sum function?

// function sum(...args) {
//     return args.reduce((sum, current) => {
//     return sum + current;
// });
// }
// console.log(sum(1, 2)); // prints 3
// console.log(sum(1, 2, 3)); // prints 6

// 3. How to pass arguments in sum function?

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

// [a, b] = [b, a];
// console.log(a); //6
// console.log(b); //3

// 5. Reduce
// Your function must use reduce

// - Given an array, return the sum of numbers that are 18 or over.
// ``` javascript
// const arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43]

// function sumOfNumbersEqualToOrOverEighteen(arr){
//     return arr.filter((item) => item >= 18).reduce((sum, current) =>{
//         return sum + current;
//     })
// }

// console.log(sumOfNumbersEqualToOrOverEighteen(arr));
// // 22 + 55 + 166 + 36 + 205 + 333 + 95 + 62 + 43 = 1017
// ```
// - Write a function which calculates average age of users.
// ``` javascript

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

// function getAverageAge(users){
//     return users.map((user) => user.age).reduce((sum, current) => {
//         return (sum + current)/users.length;
//     })
// }

// console.log(getAverageAge(users)); // 55;