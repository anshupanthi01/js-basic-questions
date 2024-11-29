const removeduplicate=(arr)=>
{
    let newarr=[...new Set(arr)];
    return newarr;

}






console.log(removeduplicate([1,2,1,2,1,2]));
console.log(removeduplicate([1,2,3,2,4,2]));
console.log(removeduplicate([5,6,7,7,2,3,4]));
console.log(removeduplicate([]));