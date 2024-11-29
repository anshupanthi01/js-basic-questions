// const sumofsquare=(arr)=>
// {
//     return arr.reduce((accum,curr)=>{
//         return accum+curr*curr;
//     },0)
    
// } or 
const sumofsquare=(arr)=>
{
    let sum=0;
    for(let elem of arr)
    {
        sum=sum+(elem*elem);
    }
    return sum;
}
console.log(sumofsquare([1,2,3]));