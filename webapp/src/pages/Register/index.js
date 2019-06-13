import React,{Component} from 'react';
import {Wrapper,InputWrapper,SubmitButton} from './style';
import {connect} from 'react-redux';
import {registerCreators as actionCreators} from '@/store/reducers';
class Register extends Component{
    render(){
        const {nickname,setInputVal}=this.props;
        return (
            <Wrapper>
                <InputWrapper>
                    <span>昵称</span>
                    <input name="nickname" type="text" 
                    value={nickname}
                    onChange={setInputVal}
                    placeholder="请输入昵称"/>
                    <span>不能超过6个字</span>
                </InputWrapper>
                <InputWrapper>
                    <span>密码</span>
                    <input name="password" type="password" placeholder="请输入密码"/>
                    <span>不能超过10个字符</span>
                </InputWrapper>
                <InputWrapper>
                    <span>确认密码</span>
                    <input name="repassword" type="password" placeholder="再次输入密码"/>
                    <span>两次密码不一致</span>
                </InputWrapper>
                <SubmitButton>注册</SubmitButton>
            </Wrapper>
        );
    }
};
const mapState=(state)=>{
    return {
        nickname:state.getIn(['register','nickname']),
        password:state.getIn(['register','password']),
        repassword:state.getIn(['register','repassword'])
    }
}
const mapDispatch=(dispatch)=>{
    return {
        setInputVal(ev){
            const action=actionCreators.setInputVal({
                key:ev.target.name,
                val:ev.target.value
            });
            dispatch(action);
        }
    }
}
export default connect(mapState,mapDispatch)(Register);