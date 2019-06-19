import React,{Component} from 'react';
import {Wrapper,BackHome,BackLogin,BackRegister} from './style';
class Header extends Component{
    render(){
        return (
            <Wrapper>
                <h1>音乐点播分享</h1>
                <div>
                    <BackHome>首页</BackHome>
                    <BackLogin>登陆</BackLogin>
                    <BackRegister>注册</BackRegister>
                </div>
            </Wrapper>
        );
    }
}
export default Header;