//singleton
//when we make it with constructor it is singleton

//object literals
//symbol
const mySym=Symbol("key1")
const JsUser={
    name:"Ishan",
    "full name":"Ishan Baghel",
    [mySym]:"key1",
    age:21,
    location:"Seoni",
    email:"ishanbaghel0@gmail.com",
    isloggedIn:false,
    lastLogin:["Monday","Friday"]
}
console.log(JsUser.name);//there is one other way which is better
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="aashu.aiai.com"
// Object.freeze(JsUser)//freezing jsuser

JsUser.greet=function(){
    console.log("hello user");
    
}
JsUser.greetTwo=function(){
    console.log(`Hello Js user ${JsUser["name"]}`)//string interpolation
}
//can use this as well ,this will refer to the current object
console.log(JsUser.greet);//would give function val
console.log(JsUser.greet())//would give us the answer
console.log(JsUser.greetTwo())