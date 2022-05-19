const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
var app = express();

//引用ejs
app.set('views', 'public'); //设置视图的对应目录
app.set('view engine', 'ejs'); //设置默认的模板引擎
app.engine('ejs', ejs.__express); //定义模板引擎

app.get('/', function (req, res) {
  res.render('index.ejs', { title: '<h4>express</h4>' });
});

app.listen(8080);
