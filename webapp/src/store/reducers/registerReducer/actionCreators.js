import {SET_INPUT_VAL,SET_RES_INFO} from './commons';
import axios from 'axios';
export const setInputVal=(data)=>({type: SET_INPUT_VAL, payLoad:data});
export const registerUser=(user,history)=>{
    return dispatch=>{
        axios.post('/register',user).then(res=>{
            if(res.data.data==="用户名已存在"){
                dispatch({type:SET_RES_INFO,payLoad:'用户名已存在!'});
            }else{
                dispatch({type:SET_RES_INFO,payLoad:'注册成功!'});
                setTimeout(()=>{
                    history.push({pathname:'/login',query:{nickname:user.nickname}});
                },1500);
            }
        }).catch(err=>{
            dispatch({type:SET_RES_INFO,payLoad:'注册失败，请重试!'});
        })
    }
}