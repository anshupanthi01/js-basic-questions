const average=(arr)=>{
    total=arr.reduce((accum,curr)=>
    accum+curr
    ,0)
    return total/arr.length;
};
console.log(average([1,2,3,4]));