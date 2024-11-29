const factrec=(arr)=>{
    if(arr===1)
    {
        return 1;
    }
    else{
        return arr*factrec(arr-1);
    }
}
console.log(factrec(5));