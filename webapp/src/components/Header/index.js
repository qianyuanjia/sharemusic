import React from 'react';
import {Wrapper,BackHome,BackLogin,BackRegister,Logout} from './style';
const  Header =({curuser,logout})=>{
    return (
        <Wrapper>
            <h1>音乐点播分享</h1>
            <div>
                <span>欢迎您，{curuser}</span>
                <BackHome>首页</BackHome>
                <BackLogin>登陆</BackLogin>
                <BackRegister>注册</BackRegister>
                <Logout onClick={logout}>退出</Logout>
            </div>
        </Wrapper>
    );
}
export default Header;