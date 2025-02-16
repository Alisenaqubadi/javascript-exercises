const sumAll = function(starter,ender) {
    if( !Number.isInteger(starter) || !Number.isInteger(ender)) return "ERROR";
    if( starter < 0 || ender < 0 ) return "ERROR";
    if( starter > ender){
        temp = starter
        starter = ender
        ender = temp
    }
    let sum = 0;
    for(let i = starter ; i <= ender ; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

console.log(sumAll("ALI" ,1));