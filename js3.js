const checktriangletype=(a,b,c)=>
{
    if(a===b&&b===c){
        return "equilateral";
    }
    else if(a===b||b===c||a===c)
    {
        return "isoceles";
    }
    else{
        return "scalene";
    }
};
console.log(checktriangletype(3,3,3,));
console.log(checktriangletype(3,4,3,));
console.log(checktriangletype(3,4,5));