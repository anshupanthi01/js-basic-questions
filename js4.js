// const sortascending=(arr)=>{
//     return arr.sort();
// }
// console.log(sortascending([5,3,1,8])); or 
const sortascending=(arr)=>
{
    return arr.sort((a,b)=>a-b);
}
console.log(sortascending([5,3,10,8]));