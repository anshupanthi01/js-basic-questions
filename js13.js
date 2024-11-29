const vowel=(str)=>
{
    let vowels=['a','e','i','o','u'];
    let arr=str.split("");
    let count=0;
    for(let char of arr){
        if(vowels.includes(char.toLowerCase()))
        {
            count++;
        }
    }
    return count;
}
console.log(vowel("Hello world"));
console.log(vowel("saranshgod"));
console.log(vowel("anshubujji"));