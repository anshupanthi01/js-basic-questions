const startswith=(str, substr)=>
        {
            return str.toLowerCase().startsWith(substr.toLowerCase());   
        }







console.log(startswith("hello world","hello"));
console.log(startswith("hello world","world"));