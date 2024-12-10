const marvel=["thor","spiderman","hulk"]
const dc=["sazam","flash","batman"]
// marvel.push(dc)
// console.log(marvel);//do not includes array takes any kind of entry data
// //array can push other arrays as well
// console.log(marvel[3][1]);
// //should use concat instead of just pushing one array inside of other
// let newheroes=marvel.concat(dc)
// console.log(newheroes);
//to do this there is spread operator too
const all_new=[...marvel, ...dc]
// console.log(all_new)
const another_arr=[1,2,3,[4,5,6],7[6,7,[4,5]]]
//how to handle this array
const real_another_array=another_arr.flat(Infinity)
console.log(real_another_array)
console.log(Array.from("Hitesh"));

