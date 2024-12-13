function sayMyName(){
    console.log("I")
    console.log("S");
    console.log("H")
    
}
// sayMyName();
// sayMyName()
// function addTwoNumbers(n1,n2){//this is parameter
//     console.log(n1+n2);
    
// }
function addTwoNumbers(n1,n2){
    result=n1+n2;
    return result
    // console.log("Ishan")//after return functions stops working
}
const ans=addTwoNumbers(1,1)//these are arguments
// console.log(`Answer is ${ans}`);

function loginUserMessage(username=ishan){//default value
    if(!username){
        console.log("Please enter name")
        return 
    }
    else{

    
    return `${username} just logged in `
    }
}

// console.log(loginUserMessage(""))
function calculateCartPrice(val1,val2,...num1){//(...) is rest as well as spread operator ,rest operator is used to take as many parameters as well wants.this comes handy in shopping carts

    return num1;//... is rest operator
}
// console.log(calculateCartPrice(2,3,4,5))
const user={
    username:"ishan",
    price:200
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)

}
// handleObject(user)
const myarr=[1,2,3,4]
function returnSecond(arr){
    return arr[1];
}
console.log(returnSecond(myarr))
console.log(returnSecond([20,30,40]));