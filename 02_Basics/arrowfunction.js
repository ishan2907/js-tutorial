//this keywords -refer to current object

const user={
    username:"ishan",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username="aashu"
// user.welcomeMessage()

// function chai(){
//     console.log(this);//cant use this in function
// }
// chai()
const chai=()=>{
    console.log()
}


// const addtwo=(n1,n2)=>{
//     return n1+n2
// }
//if you are using curly braces then you will have to use return but if you are using parenthesis then you dont need to use anything like that

//implicit return 
// const addTwo=(n1,n2)=>n1+n2
const addTwo=(n1,n2)=>({username:"ishan"})
console.log(addTwo(1,2))