//primitive dt(call by value)
//7:String,Number,bool,null,undefined
//Symbol,bigint

//non-primitive (call by reference)
//Array,Objects,Functions
/*const id=Symbol('123')
const heroes=["hulk","spiderman","antMan"]
let myobj={
    name:"Ishan",//inside curly braces object ,inside square braces arrays
    age:21
}
const myfunc=function(){
    console.log("Hello world");
}*/
//Memory -stack(used with primitive types) and heap(used with non primitive )
let myYoutubeName="ishanbaghel"
let anothername=myYoutubeName
anothername="kishanlal"
console.log(anothername)
console.log(myYoutubeName)

let user1={
    email:'user@gmail.com',
    upi:"uerse@ybl"
}
let user2=user1
user2.email="ishanbaghel0@gmil.com"
console.log(user1.email)
console.log(user2.email)