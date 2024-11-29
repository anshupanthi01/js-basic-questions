const countchar=(word,char)=>
{
    word=word.toLowerCase();
    char=char.toLowerCase();
   const words=word.split("");
   return words.reduce((accum,curr)=>{ 
    if(curr===char){
        accum++;
    }
    return accum;
   },0);
};
console.log(countchar("MissIssippi",'I'));
