const isuppercase=(str)=>
{
    if(str.charCodeAt(0)>=65  && str.charCodeAt(0)<90){
        return true;
    }
    else 
    return false;
};
console.log(isuppercase("S"));
console.log(isuppercase("b"));