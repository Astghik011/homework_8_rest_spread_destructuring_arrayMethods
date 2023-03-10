// 1. Array.forEach()

// function forEach(arr){
//     for(let i = 0; i < arr.length; i++){
//          console.log(arr[i]);
//     }
// }

// const arr = [1,3,5,"yes", true, undefined, , " "];   // the part with empty slots isn't working
// console.log(forEach(arr));

// 2. Array.slice()

// function slice(arr, start, end){
//     const newArr = [];

//         if(start && end){

//             if(start < 0 && end < 0){
//                 for(let i = start + arr.length; i > end + arr.length; i--){
//                    newArr.unshift(arr[i]);
//                    }  
//                 }

//             for(let i = start; i < end; i++){
//                 newArr.push(arr[i]);
//             }

//         } else if(start){

//             for(let i = start; i < arr.length; i++){
//                 newArr.push(arr[i]);
//             }

//         } else{

//             for(let i = 0; i < arr.length; i++){
//                 newArr.push(arr[i]);
//             }

//         }
        
//     return newArr;
// }

// const arr = [1, 2, 35, , undefined, 56, 9, 199, 3];
// const start = -2;
// const end = -5;
// console.log(slice(arr, start, end));
// console.log(slice(arr, start));
// console.log(slice(arr));                    //same problem here, the part with empty slots isn't working, returns undefined, 
                                            // instead of an empty slot

// 3. Array.splice()

// function splice(arr, start, deleteCount, items){
//     const patch = [];
//     let end = start + deleteCount;
//     for(let i = arr.length; i > start; i--){
//         patch.unshift(arr.pop(arr[i]));
//     }

//     for(let i = 0; i < items.length; i++){
//         patch[i] = items[i]
//     }

//     return arr.concat(patch);
// }

    
// const arr = [1, 2, 3, 4, 3, 4, 7, 8, 9];
// const start = 4;
// const deleteCount = 2;
// const items = [5, 6];
// console.log(splice(arr, start, deleteCount, items)); // works only in case the delete count and the length of the items are equal.
// console.log(splice(arr, start, deleteCount)); // this and a lot of other things don't work.


// 4. findIndex

// function findIndex(arr, input){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === input){
//             return i;
//         }
//     }
//     return -1;
// }

// arr = [1,9,75,5,1,2,6,2,1,5]
// console.log(findIndex(arr, 5));
// console.log(findIndex(arr, 10));

//5. find

// function find(elem, arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > elem){
//             return arr[i];
//         }
//     }
//     return undefined;
// }

// const arr = [1, 9, 75, 5, 16, 5];
// console.log(find(5, arr));  // outputs correct data but doesn't work the way it should. 
                               // I don't get the parameters part right.
// 6. map

// function map(arr){
//     let arr2 = [];
//     for(let i = 0; i < arr.length; i++){
//         arr2.push(arr[i]);
//     }
//     return arr2;
// }

// const arr =[1,6,8,111,2236,1222,666];
// console.log(map(arr));           
