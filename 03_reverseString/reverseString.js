const reverseString = function( str ) {
    const splitedStr = str.split("");
    const reversedArray = splitedStr.reverse();
    const reversedStr = reversedArray.join("");
    return reversedStr;
}

console.log(reverseString('ali'));

// Do not edit below this line
module.exports = reverseString;
