const reverseString = function (string) {
  console.log(string.split(""));
  console.log(string.split("").reverse());
  console.log(string.split("").reverse().join(""));
  return string.split("").reverse().join("");
};
console.log(reverseString("hello world"));
module.exports = reverseString;
