const sumofdigit=(num)=>
{
    let numbers=Array.from(String(num),Number);
    return numbers.reduce((accum,curr)=>
         accum+curr
    ,0);
};
console.log((sumofdigit(1234)));
console.log((sumofdigit(4534)));
console.log((sumofdigit(8934)));
