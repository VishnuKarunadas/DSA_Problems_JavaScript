// // Question 1 - second largest number in array 
// //Input [12,35,1,10,34,1] ------>>>>> Output: 34
// //Input [10,5,10]  ------->>>>> Output: 5

// //brut force solutions this might be not optimized

// const arr = [12,35,1,10,34,36,1,35,36];
// arr.sort((a,b)=>a-b)
// console.log(arr[arr.length-2])
// //[10,5,10]  ------->>>>> Output: 5 the above approch fail when the largest number is duplicate in same arry effect the 
// // use set ith avoid duplicate number so we can avoid it
// const newSet = new Set(arr)
// console.log(newSet) // output is Set(5) { 1, 10, 12, 34, 35 }

// // so use this approch 
// const newSet2 = Array.from(new Set(arr)); //Convert to Array (iterable )
// console.log(newSet2); // output is [ 1, 10, 12, 34, 35 ]
// console.log(newSet2[newSet2.length-2])




// function findSecondLargest(array) {
//     array.sort((a,b)=>a-b) // Time-Complexity is O(n log n)
//     const newSet2 = Array.from(new Set(array)); // Time-Complexity is O(n)
   
//     return newSet2[newSet2.length-2];
// }//Total time complexity is O(n log n) + O(n) = O(n log n)





// const Input1 = [10,5,10];
// console.time("largest");
// console.log(findSecondLargest(Input1));
// console.timeEnd("largest");



// // Optimisized approach
// function findSecondLargest(array) {
//    let  largest = Number.NEGATIVE_INFINITY;//-100000000000000000 ~ small value in js
//    let secondLargest = Number.NEGATIVE_INFINITY;

//    for(let i = 0; i < array.length; i++) {
//     if(array[i] > largest) {
//         secondLargest = largest;
//         largest = array[i];
//         } else if(array[i] > secondLargest && array[i] !== largest) {
//             secondLargest = array[i];
//             }

//         }
//         return secondLargest;
// }
// console.log(findSecondLargest(arr));



// Qusetion 1
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Input : nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
let  nums = [0,1,0,3,12]
function moveAllZeroToEnd(arr){
    let nonZeroIndex =0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[nonZeroIndex];
            arr[nonZeroIndex] = temp;
            nonZeroIndex++;
        }
    }
    return arr;
}

console.log(moveAllZeroToEnd(nums))

