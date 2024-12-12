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

console.log(loginUserMessage(""))