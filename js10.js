const longestword=(str)=>
{
    if(str.trim().length===0){
        return false;
    }
    words=str.split(" ");
    return words.reduce((accum,curr)=>(curr.length>accum.length?curr:accum));
}
console.log(longestword("my name is anshu panthi" ));