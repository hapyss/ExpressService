var express = require("express");
var router = express.Router();

const answer = require("../mockdata/answer");

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    };
    return shuffled.slice(min);
}
let wenti = answer.data_wenti;
let wentiattr = [];
for(key in wenti){
    wentiattr.push(key)
};
function test(){
    let _wentiattr = getRandomArrayElements(wentiattr, 3);
    let senddata = {};
    for(let i = 0; i < _wentiattr.length; i++){
        senddata[_wentiattr[i]] = wenti[_wentiattr[i]];
    };
    return senddata;
}

router.get("/",function(req,res){
    res.send(test());
});

module.exports = router;