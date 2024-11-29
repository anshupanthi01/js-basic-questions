const totruncatestr=(str1,num)=>
{
    // if(num<=0)
    // { 
    //     return false;
    // }
    // else if(str1.length>num)
    // {
    //     return str1.slice(0,num).concat("...");
    // }
    // else
    // return false;or
    return num<=0?str1:str1.slice(0,num).concat("...");
}



console.log(totruncatestr("a-ticket a-bracket- a green apple",8));