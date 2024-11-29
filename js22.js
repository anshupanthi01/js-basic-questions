const numbers=[1,2,2,3,1,4,2];
let counts={};
for(let elem of numbers)
{
    counts[elem]=(counts[elem]||0)+1;

}
console.log(counts);