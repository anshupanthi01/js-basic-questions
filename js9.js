const array=(arr1,arr2)=>{
    if(arr1.length!==arr2.length){
        return false;
    }
    return arr1.every((curr,index)=>curr===arr2[index]);
}





console.log(array([1,2,3],[1,2,3]));
console.log(array([1,2,3],[1,2,4]));
console.log(array([],[]));
