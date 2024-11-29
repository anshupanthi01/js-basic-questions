const simplepasswordvalidator=(str)=>
{
    let haslowercase=false;
    let hasuppercase=false;
    let hasnumber=false;
    for(let char of str)
    {
        if(char.charCodeAt(0)>=65&&char.charCodeAt(0)<=90)
        {
            hasuppercase=true;
        }
        else if(char.charCodeAt(0)>=97&&char.charCodeAt(0)<=122)
        {
            haslowercase=true;
        }
        else if(!isNaN(Number(char)))
            {
               hasnumber=true; 
            }  }
            if(!haslowercase||!hasuppercase||!hasnumber||str.length<8)
            {
                return false;
            }
            return true;
}
console.log(simplepasswordvalidator("afkdhshhs"));
console.log(simplepasswordvalidator("Saransh8"));
console.log(simplepasswordvalidator("afkAnshu"));
console.log(simplepasswordvalidator("olelelelele12Q"));