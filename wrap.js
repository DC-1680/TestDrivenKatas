
const wrap = (str, maxLeng) => {
    if (str.length <= maxLeng){
        return str; 
    };

const indexOfSpace=str.lastIndexOf(' ',maxLeng);

let split;
let offset;
if(indexOfSpace>-1){
    split=indexOfSpace;
    offset=1;
}
else{
    split=maxLeng;
    offset=0;
}

return str.substring(0,split)+'\n'+wrap(str.substring(split+offset),maxLeng);
};

module.exports = wrap;

// String.prototype.indexOf
// String.prototype.lastIndexOf

//Before jumping into \n
// any code, take some \n
// time to think about \n
// possible test cases.