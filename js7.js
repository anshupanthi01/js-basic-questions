const palin=(str)=>
{
    str=str.toLowerCase().replace(/\W/g,"");
    let rstr=str.split("").reverse().join("");
    if(str===rstr){
        return "true";
    }
    else
    return "false";
}
console.log(palin("a man,a plan,a canal,panama"));
console.log(palin("racecar"));
console.log(palin("car"));