const numgen=(num1,num2)=>
{
    let arr=[];
    for(let i=num1;i<=num2;i++)
    {
        arr.push(i);
    }
    return arr;
}
console.log(numgen(0,5));
console.log(numgen(3,11));
console.log(numgen(0,11));