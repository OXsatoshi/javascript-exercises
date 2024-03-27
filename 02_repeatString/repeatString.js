const repeatString = function(stringToBeRepeated,numberOfTimes) {
    if(numberOfTimes < 0) return "ERROR";
    else
        return stringToBeRepeated.repeat(numberOfTimes);

};

// Do not edit below this line
module.exports = repeatString;
