const removeFromArray = function(array,e) {
    let arrayExcludingValueGived = array;
    for(let i = 1;i<arguments.length;i++){
        arrayExcludingValueGived = removeOneItem(arrayExcludingValueGived,arguments[i]);
    }
    return arrayExcludingValueGived;
};
function removeOneItem(array,item){
    return array.filter( currentValue=>currentValue!==item);
}
// Do not edit below this line
module.exports = removeFromArray;
