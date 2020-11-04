var express = require("express");
var router = express.Router();
var data = {x:1,y:2}
const UserInfo = require("../mockdata/UserInfo");

const answer = require("./answer.js");

router.get("/",function(req,res){
    //res.end("router right");
    res.render("index");
});
router.post("/post",function(req,res){
    console.log('post请求：req.body：');
    console.log(req.body);
    res.send("req.body");
});

router.get("/get",function(req,res){
    console.log('get请求：req.query')
    console.log(req.query);
    res.send(UserInfo);
});

router.use("/answer",answer);

module.exports = router;
