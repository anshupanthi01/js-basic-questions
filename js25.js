const fibo=(num)=>
{
    if(num<=1)
    {
        return num;
    }
    else{
        return fibo(num-1)+fibo(num-2);
    }
};
const printfibo=(n)=>
{
    for(let i=0;i<n;i++)
    {
        console.log(fibo(i));
    }
};
printfibo(5);
console.log(fibo(0));
console.log(fibo(4));
console.log(fibo(3));