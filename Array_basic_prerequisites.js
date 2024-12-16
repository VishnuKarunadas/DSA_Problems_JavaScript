//Base Questions dynamic 5     [1,2,3,4,5,8,0,0,0,0]
// let arr= [1,2,3,4,5];  

// //Accessing elements
// console.log(arr[2]);//3 O(1)

// //insert at the beginning
// arr.unshift(0);
// console.log(arr);//[0,1,2,3,4,5]   Time O(n)

// //insert at the end
// arr.push(6);
// console.log(arr);//[0,1,2,3,4,5,6]

// //Removing from end
// arr.pop();
// console.log(arr);//[0,1,2,3,4,5]

//insert at a specific position
// arr.splice(3,0,7);  // start,end,value  start and end value will be deleted
// console.log(arr);//[0,1,2,7,3,4,5,6]

// //Removing from the beginnning
// arr.shift();
// console.log(arr);//[1,2,7,3,4,5,6]


// //// find the missing number in an array ?
// console.log("find the missing number in an array ?")
// let arr1 = [1, 2, 3, 5, 6, 7];

// function findMissingNumber(arr){
//     let n = arr.length + 1;//  O(1)
//     let expextedSum = (n*(n+1))/2;   //  O(1)
//     let actualSum = arr.reduce((a,b)=>a+b,0);  //  O(n)
//     return expextedSum - actualSum; //  O(1)
// }
// console.log(findMissingNumber(arr1)); //4

// let arr=[2,4,6,8,10];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// let i=0
// while(i<arr.length){ //T O(n)
//     console.log(arr[i]);
//     i++;
// }
// // inbuild loop method
// const numbers = [1, 2, 3, 4, 5];
// const newArray = numbers.map((items,index,array)=>{  // map always return new array
//     console.log(items,index,array);
//     return items + 5;
// })
// console.log(newArray);

// const newArray2 = numbers.filter((items,index,array)=>{  // map always return new array
//     console.log(items,index,array);
//     return items> 2;
// })
// console.log("filter:-");
// console.log(newArray2);
// //reduce
// const newArray3 = numbers.reduce((previousValue,currentValue,index,array)=>{  // map always return new array
//     console.log(previousValue,currentValue,index,array);
//     return previousValue+currentValue;
// },0)//zero as initial value or previous value 
// console.log("Reduce:-");
// console.log(newArray3);

// const newArray2 = numbers.some((items,index,array)=>{  // map always return new array retuen true or false
//     console.log(items,index,array);
//     return items> 2;
// });
//  console.log("some:-");
//  console.log(newArray2);

//  const newArray2 = numbers.every((items,index,array)=>{  // map always return new array
//     // console.log(items,index,array);
//     return items> 0;
// });
//  console.log("every:-");
//  console.log(newArray2);

//  const newArray2 = numbers.find((items,index,array)=>{  // map always return new array
//     // console.log(items,index,array);
//     return items> 4;
// });
//  console.log("find:-");
//  console.log(newArray2);

//spread and rest operators
const nums= [1,2,3];
const nums2= [4,5,6,7];
// const finalArray = [...nums,...nums2] //spread operator
// console.log(finalArray)

//rest example
function sum(...numbers){ //rest operator 
    return numbers;
}
console.log(sum(...nums,...nums2,"hiii")) //spread operator here


//slice remove elements and return to new array
// const fruits = ["apple","banana","cherry"]
// const fruits2 = fruits.slice(1,3) //slice from 1 to 3
// console.log(fruits2);

// //splice it change the current array and delete update and add new elements
// console.log(fruits);
// fruits.splice(1,2,"Orange")
// console.log(fruits);

// const dummyarray = [2,3,4,5,6];
// dummyarray.fill(9,3,4); //value,start,end
// console.log(dummyarray);

// //flatten
// const flatArr = [[1,2,3],[4,5,6],[7,[8,9]]];
// console.log(flatArr.flat(2))


// //reverse 
// const nums = [1,2,3,4,5,6];
// console.log(nums.reverse())



//sort go and study more about sort in mozila doc
// const unsortedArray = [5,2,8,1,9];
// unsortedArray.sort((a,b)=>b-a)
// console.log(unsortedArray);

