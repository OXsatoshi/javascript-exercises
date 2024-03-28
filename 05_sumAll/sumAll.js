const sumAll = function(start,end) {
    let sum = 0 ;
    if(typeof start !== "number" || typeof end !== "number") return "ERROR";
    if(start < 0 || end < 0) return "ERROR";
    else {
     let minIndex = min(start,end);
     let maxIndex = max(start,end);
     for(let i = minIndex;i<=maxIndex;i++){
        sum+=i;
     }
     return sum;
    }
}
function min(a,b){
    if(a < b) return a;
    if(b < a) return b;
}
function max(a,b){
    if(a > b) return a;
    if(b > a) return b;
}
// Do not edit below this line
module.exports = sumAll;
