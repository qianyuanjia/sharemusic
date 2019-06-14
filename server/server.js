var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
//创建应用
var app=express();
//中间件配置
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//路由接口
app.post('/register',function(req,res){
    let users=require('./users.json');
    for(var i=0;i<users.length;i++){
        if(users[i].nickname===req.body.nickname){
            console.log('用户名已存在！');
            return res.send({code:500,data:'用户名已存在'});
        }
    }
    users.push(req.body);
    fs.writeFile('./users.json',JSON.stringify(users),function(err){
        if(!err){
            console.log('添加用户成功！');
            res.sendStatus(200);
        }else{
            console.log('添加用户失败！');
            res.sendStatus(500);
        }
    });
})
app.listen(4000,function(){
    console.log('\033[96m the server is running at 4000 \033[39m')
})