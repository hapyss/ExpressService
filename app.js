const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const router = require("./router/index.js");
// const mysql = require('mysql');

// //开启数据库
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test',
//     multipleStatements: true, //  允许执行多条语句
// })
// connection.connect(() =>{
//     console.log('链接成功')
// });

app.use(express.static("./public"));
app.set("views","./views");
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//设置跨域访问
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type, x-requested-with");//允许referer为空
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    //res.header("X-Powered-By", ' 3.2.1');//告知浏览器是用什么语言解析器或者应用程序框架输出的。
    //x开头，表示自定义的头，可要可不要
    //res.header("Content-Type", "application/json;charset=utf-8");//设置请求头的Content-Type
    next();
});


app.use("/",router);

console.log("process.env.NODE_ENV:"+process.env.NODE_ENV)

module.exports = app;
