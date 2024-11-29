const num=(a,b,arr=[])=>
{
    if(a<=b)
    {
        arr.push(a);
        return num(a+1,b,arr);
    }
    return arr;
}
console.log(num(0,5));