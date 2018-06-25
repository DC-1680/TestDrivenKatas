
const wrap = (str, maxLeng) => {
    let returnVal = [];

    if (str.length === 0){
        return str; 
    };



    for (let i = 0; i < str.length; i++){
        if (i === maxLeng){
            returnVal.push(currLine.slice(0, maxLeng));
            currLine = currLine.slice(maxLeng + 1);
        }
    }

    console.log(returnVal.join('\n'));
    return returnVal.join('\n');
};

module.exports = wrap;

// String.prototype.indexOf
// String.prototype.lastIndexOf

//Before jumping into \n
// any code, take some \n
// time to think about \n
// possible test cases.