const generatehash=(str)=>{
    if(str.length>280||str.trim()===0){
        return false;
    }
    words=str.split(" ");
    words=words.map((curelem)=>curelem.replace(curelem[0],curelem[0].toUpperCase()));
    words=`#${words.join("")}`;
    return words;

};
console.log(generatehash("my name is saransh basu"));