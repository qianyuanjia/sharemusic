# sharemusic
a website for sharing music
```
本项目前端内容采用react框架，使用create-react-app脚手架建立初步应用架构，
由于需要单独对webpack做些修改配置，比如创建目录别名，所以使用eject
命令将webpack配置反向编译暴露出来，目录结构和采用脚手架生成稍有不同。
```

```
本项目是一个在线音乐搜索播放平台，基本的功能有注册，登录，搜索歌曲以及在线播放。
本项目包含了前后端代码，前端使用react，结合数据管理框架redux，使用redux-thunk请求
接口。后端采用nodejs结合express框架，给出了几个接口用于获取歌曲列表，海报地址，歌曲
链接。
```

```
项目启动方式
进入项目根目录后，安装完前后端所有依赖后，进入到webapp目录下，先运行npm run serve启动
后台服务，之后运行npm run start 启动前端项目即可。正常注册登录之后就可以在线搜索歌曲
和播放了。
```

