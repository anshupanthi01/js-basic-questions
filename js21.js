const median=(arr)=>
{
    console.log(arr.sort((a,b)=>a-b));
    let length=arr.length;
    let mid=Math.floor(length/2);
    if(length%2===0)
    {
        return (arr[mid]+arr[mid-1])/2;
    }
    else{
        return arr[mid];
    }

}
console.log(median([1,2,3,4]));
console.log(median([5,3,9,1,7]));
console.log(median([1,3,5,7,9,11]));