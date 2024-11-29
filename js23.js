const findmode=(arr)=>
{
    let counts={};
    let maxnum=0;
    let mode;
    for(let elem of arr)
    {
        counts[elem]=(counts[elem]||0)+1;
        if(counts[elem]>maxnum)
        {
            maxnum=counts[elem];
            mode=elem;
        }
    }
    return mode;
}

console.log(findmode([1,2,2,3,1,4,2]));