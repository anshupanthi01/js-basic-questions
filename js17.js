const tocamel=(str)=>
{
     let words=str.trim().split(" ");
    words=words.map((curelem,index)=>{
        if(index===0){
            return curelem.toLowerCase();
        }
        else{
            return curelem.charAt(0).toUpperCase()+curelem.slice(1).toLowerCase();
        }
    });
    return words.join("");
}
console.log(tocamel("hello world saransh"));