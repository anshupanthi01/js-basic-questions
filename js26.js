// const repeatstring=(str1,str2)=>
// {
//     for(let i=0;i<str2;i++)
//     {
//         console.log(str1);
//     }
// }
// repeatstring("abc",5); or
const repeatstring=(str1,num)=>
{
    return num>0?str1.repeat(num):str1;
};
console.log(repeatstring("abc\n",6))