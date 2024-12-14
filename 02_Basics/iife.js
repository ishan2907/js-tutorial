//immedately invoked function expressions (IIFE)-functions get executed immediately ,just enclosed function inside a bracket
(function chai(){
    console.log('DB connected')
})();
//(function defini tion )()->function execution 
//to stop execution of iife add;
// ( ()=>{
//     console.log("DB connected two")
// })()
( (name)=>{
    console.log(`DB connected , ${name}`)
})('ishan')