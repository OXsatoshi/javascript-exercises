const reverseString = function(string) {
    let arrayOfString = string.split(" ");
    let reversedString="";
    for(let i=arrayOfString.length-1;i>=0;i--){
        reversedString+=reverseSingleString(arrayOfString[i]);
        reversedString+=" ";
    }
    return reversedString.trimEnd();   
}
function reverseSingleString(string){
    let reversedString="";
    for(let i = string.length-1 ; i>=0;i--){
  
        reversedString+=string.charAt(i);
        
    }
    
    return reversedString;
}
console.log(reverseSingleString("heloo"));
// Do not edit below this line
module.exports = reverseString;
