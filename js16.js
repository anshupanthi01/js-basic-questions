const min=(arr)=>
{
    let mini=arr.sort((a,b)=>a-b);
    return mini[0];
}
console.log(min([1,2,3,4]));
console.log(min([10,2,-3,4]));
console.log(min([11,12,3,14]));