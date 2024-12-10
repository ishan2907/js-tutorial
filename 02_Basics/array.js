//array


const myArr=[0,1,2,3,4,5]//different from c++ in js we use square brackets
//js arrays are resizable and there can be mix of different datatypes
// console.log(myArr[0])
//js makes shallow copy of array,shallow copy share same reference point
//if we make some changes in copy ,original array will reflect that change as well
const myarr2=new Array(1,2,3)

//array methods
// myArr.push(6)
// console.log(myArr);
// myArr.pop()

//unshift
// myArr.unshift(9)//9 will get added at the beginning and all the other value get shifted

// console.log(myArr);
// myArr.shift();//remove the values from the beginning
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(1));

// const newArr=myArr.join()//convert the array elements to string
// console.log(newArr);

//slice and splice
console.log("A",myArr);
const myn1=myArr.slice(1,3)//return a section of an array here it will 
//include first and second element and leave the third one
console.log(myn1);

console.log("B",myArr)
console.log("A",myArr);
const myn2=myArr.splice(1,3)//this will include first second and third 
//element ,one major difference between slice and spllice is that
//slice do not make any changes in org array but splice does if we
//have given 1,3 as the range then it will leave all the elements 
//after index 4 in the org array

console.log(myn2);
console.log("B",myArr)
