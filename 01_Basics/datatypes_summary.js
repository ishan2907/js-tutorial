//primitive dt(call by value)
//7:String,Number,bool,null,undefined
//Symbol,bigint

//non-primitive (call by reference)
//Array,Objects,Functions
const id=Symbol('123')
const heroes=["hulk","spiderman","antMan"]
let myobj={
    name:"Ishan",//inside curly braces object ,inside square braces arrays
    age:21
}
const myfunc=function(){
    console.log("Hello world");
}