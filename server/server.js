var express=require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var session = require('express-session');
var axios=require('axios');
var http=require('http');
//创建应用
var app=express();
var server=http.createServer(app);
//中间件配置
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(session({
    secret: 'share-music',
    resave: false,
    saveUninitialized: true
  }))
//路由接口

//注册
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
//登陆
app.post('/login',function(req,res){
    let users=require('./users.json');
    for(var i=0;i<users.length;i++){
        if(users[i].nickname===req.body.nickname && users[i].password===req.body.password){
            console.log('登陆成功！');
            req.session.curUser=req.body.nickname;
            return res.send({code:200,data:'登陆成功'});
        }
    }
    res.send({code:403,data:'登陆失败'});
})
//退出登陆
app.post('/logout',function(req,res){
    req.session.curUser='';
    res.sendStatus(200);
})
//获取当前用户
app.get('/curUser',function(req,res){
    res.send(JSON.stringify(req.session.curUser));
})
//获取所有歌曲来源
app.get('/getSources',function(req,res){
    const sourceList=require('./sources.json');
    res.send(sourceList);
})

app.get('/getSongList',function(req,res){
    const {page,source,keywords,pageSize}=req.query;
    const params={
        aggr: 1,
        cr: 1,
        flag_qc: 0,
        p: page,
        n:pageSize,
        w:keywords
    };
    axios.get('https://c.y.qq.com/soso/fcgi-bin/client_search_cp',{
        params
    }).then(function(result){
        let resJson=JSON.parse(result.data.replace(/^callback\(|\)$/g,''));
        res.send(resJson.data);
    }).catch(err=>{
        res.sendStatus(500);
    })
})

app.get('/getSongUrl',function(req,res){
    const {songmid}=req.query;
    const params={
        format:'json205361747',
        platform:'yqq',
        cid:'205361747',
        guid:'126548448',
        songmid,
        filename:'C400'+songmid+'.m4a'
    };
    axios.get('https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg',{
        params
    }).then(result=>{
        const data=result.data.data.items[0] || {};
        console.log(data)
        let url=`http://ws.stream.qqmusic.qq.com/${params.filename}?fromtag=0&guid=${params.guid}&vkey=${data.vkey}`;
        res.send(url);
    }).catch(err=>{
        res.sendStatus(500);
    })
})
server.listen(4000,function(){
    console.log('\033[96m the server is running at 4000 \033[39m')
})