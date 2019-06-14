import React,{Component} from 'react';
import {Wrapper,InputWrapper,SubmitButton} from './style';
import {connect} from 'react-redux';
import {registerCreators as actionCreators} from '@/store/reducers';
import {Message} from '@/components';
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            showMessage:false,
            showResMessage:false,
            showJumpMessage:false
        };
        this.submitForm=this.submitForm.bind(this);
    }
    submitForm(){
        const {nickname,resinfo,history}=this.props;
        if(resinfo==="注册成功!"){
            this.setState({
                showJumpMessage:true
            },()=>{
                setTimeout(()=>{
                    history.push({pathname:'/login',query:{nickname}});
                },1500)
            })
        }else{
            const {password,repassword,registerUser}=this.props;
            let nicknameRight=nickname.length>0 && nickname.length<7;
            let passwordRight=password.length>0 && password.length<11;
            let repasswordRight=repassword.length>0 && repassword===password;
            let valid=nicknameRight && passwordRight && repasswordRight;
            if(valid){
                this.setState({
                    showResMessage:false
                },()=>{
                    this.setState({
                        showResMessage:true
                    });
                    registerUser({
                        nickname,password
                    });
                })
               
            }else{
                this.setState({
                    showMessage:false
                },()=>{
                    this.setState({
                        showMessage:true
                    });
                })
            }
        }
    }
    render(){
        const {nickname,password,repassword,resinfo,setInputVal,history}=this.props;
        const {showMessage,showResMessage,showJumpMessage} = this.state;
        let resMessage=null;
        switch(resinfo){
            case '用户名已存在!':
            case '注册失败，请重试!':
                resMessage=<Message content={resinfo} type="error"/>;
                break;
            case '注册成功!':
                resMessage=<Message content={resinfo} />
                setTimeout(()=>{
                    history.push({pathname:'/login',query:{nickname}});
                },1500);
                break;
            default:
                resMessage=null;
        }
        return (
            <Wrapper>
                {showMessage && <Message content='填写错误，请检查！' type='error'/>}
                {showResMessage && resMessage}
                {showJumpMessage && <Message content="您已注册，直接登陆即可！" />}
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
        repassword:state.getIn(['register','repassword']),
        resinfo:state.getIn(['register','resinfo'])
    }
}
const mapDispatch=(dispatch)=>{
    return {
        setInputVal(ev){
            dispatch(actionCreators.setInputVal({
                key:ev.target.name,
                val:ev.target.value
            }));
        },
        registerUser(user){
            dispatch(actionCreators.registerUser(user));
        }
    }
}
export default connect(mapState,mapDispatch)(Register);