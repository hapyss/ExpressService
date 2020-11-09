var express = require("express");
var router = express.Router();

const answer = require("../mockdata/answer");
const compare = require("../common_function/compare");
const getRandomArrayElements = require("../common_function/getRandomArrayElements")

let _wenti = [...answer];
let _wenti_obj = {};
//把数组题组合为对象。
answer.forEach((val, index)=>{
    _wenti_obj['data'+index] = {...val};
    if(val.picked.constructor === Number){
        _wenti[index].picked = -1;
    }else{
        _wenti[index].picked = [];
    }
});
//前端获取答案列表
router.get("/",function(req,res){
    res.send(getRandomArrayElements(_wenti, 2));
});
//前端提交答案进行验证
router.get("/sub",function(req,res){
    let RstNum = 0;
    let req_wenti = req.query.answers;
    req_wenti.forEach((val, index)=>{
        let _val = JSON.parse(val)
        if(_val.picked.constructor == Array){
            _val.picked.sort();
            if(compare(_val.picked, _wenti_obj["data"+_val.id].picked)){
                RstNum++;
            }
        }else{
            if(_val.picked == _wenti_obj["data"+_val.id].picked){
                RstNum++;
            }
        }
    });
    res.send(String(RstNum));
});

module.exports = router;