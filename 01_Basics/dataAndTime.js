//dates
let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString())
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString())

//declaring specific date
// let myCreateDate=new Date(2024,0,23)//in js months starts from 0 instead of 1
let myCreateDate=new Date("2023-02-22")
// console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreateDate.getTime())
// console.log(Math.floor(Date.now()/1000))//converting to seconds
let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth())
newDate.toLocaleString('default',{
    weekday: "long"
})
