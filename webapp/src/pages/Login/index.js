import React,{Component} from 'react';
import {Wrapper,InputWrapper,SubmitButton,RegLink} from './style';
import {connect} from 'react-redux';
import {loginCreators as actionCreators} from '@/store/reducers';
import {Message} from '@/components';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            showMessage:false,
            showResMessage:false
        };
        this.submitLogin=this.submitLogin.bind(this);
    }
    componentDidMount(){
        const {location,setInputVal} =this.props;
        let nickname=location.query?location.query.nickname:'';
        if(nickname){
            setInputVal({target:{name:'nickname',value:nickname}});
        }
    }
    submitLogin(){
        const {resinfo,history}=this.props;
        if(resinfo.includes('登陆成功')){
            return this.setState({
                showResMessage:true
            },()=>{
                setTimeout(()=>{
                    history.push('/home');
                },1500)
            })
        }
        const {nickname,password,requestLogin}=this.props;
        let nicknameRight=nickname.length>0 && nickname.length<7;
        let passwordRight=password.length>0 && password.length<11;
        const valid = nicknameRight && passwordRight;
        if(valid){
            this.setState({
                showResMessage:false
            },()=>{
                this.setState({
                    showResMessage:true
                });
                requestLogin({nickname,password},history);
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
    render(){
        const {nickname,password,resinfo,setInputVal}=this.props;
        const {showMessage,showResMessage}=this.state;
        return (
        <Wrapper>
            {showMessage && <Message content='填写错误，请检查！' type="error"/>}
            {showResMessage && <Message content={resinfo} type={resinfo.includes('登陆成功')?'success':'error'}/>}
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
            <RegLink>没账号，去注册</RegLink>
            <SubmitButton onClick={this.submitLogin}>登陆</SubmitButton>
        </Wrapper>
        );
    }
}
const mapState=(state)=>{
    return {
        nickname:state.getIn(['login','nickname']),
        password:state.getIn(['login','password']),
        resinfo:state.getIn(['login','resinfo'])
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
        requestLogin(info,history){
            dispatch(actionCreators.requestLogin(info,history));
        }
    }
}
export default connect(mapState,mapDispatch)(Login);