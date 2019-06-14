import React,{Component} from 'react';
import {Wrapper,InputWrapper,SubmitButton} from './style';
import {connect} from 'react-redux';
import {registerCreators as actionCreators} from '@/store/reducers';
import {Message} from '@/components';
class Register extends Component{
    constructor(props){
        super(props);
        this.submitForm=this.submitForm.bind(this);
    }
    submitForm(){
        const {nickname,password,repassword}=this.props;
        let nicknameRight=nickname.length>0 && nickname.length<7;
        let passwordRight=password.length>0 && password.length<11;
        let repasswordRight=repassword.length>0 && repassword===password;
        if(nicknameRight && passwordRight && repasswordRight){
            alert('ok')
        }else{
            
        }
    }
    render(){
        const {nickname,password,repassword,setInputVal}=this.props;
        return (
            <Wrapper>
                <Message content="书写成功" type="error"/>
                <InputWrapper>
                    <span>昵称</span>
                    <input name="nickname" type="text" 
                    value={nickname}
                    onChange={setInputVal}
                    placeholder="请输入昵称"/>
                    <span>{
                        nickname.length?
                        (nickname.length>6?'不能超过6个字':'')
                        :'昵称不能为空'
                    }</span>
                </InputWrapper>
                <InputWrapper>
                    <span>密码</span>
                    <input name="password" 
                    value={password}
                    onChange={setInputVal}
                    type="password" placeholder="请输入密码"/>
                    <span>{
                        password.length?
                        (password.length>6?'不能超过10个字符':'')
                        :'密码不能为空'
                    }</span>
                </InputWrapper>
                <InputWrapper>
                    <span>确认密码</span>
                    <input name="repassword" 
                     value={repassword}
                     onChange={setInputVal}
                    type="password" placeholder="再次输入密码"/>
                    <span>{
                        repassword && (password !==repassword)?'两次密码不一致':''
                    }</span>
                </InputWrapper>
                <SubmitButton onClick={this.submitForm}>注册</SubmitButton>
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