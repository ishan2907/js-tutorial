const tinderUser=new Object()

tinderUser.id="123abc"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false

console.log(tinderUser);

const regularUser={
    email:"some@gmailm.com",
    fullName:{
        userfullname:{
            firstname:"ishan",
            lastname:"baghel"
        }
    }
}
console.log(regularUser.fullName.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign({},obj1,obj2)//assign operator
const obj3={...obj1,...obj2}//spread operator
console.log(obj3);

const user=[{
    id:1,
    email:"ishan"
},{
    id:2,
    email:"baghel"
}]
console.log(user[0].id)
console.log(Object.keys(tinderUser))//datatype would be array
console.log(Object.entries(tinderUser))//convert every key value pairs to array
console.log(Object.hasOwnProperty('name'));//does object contains that 
//property or not
