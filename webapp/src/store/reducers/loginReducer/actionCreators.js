import {SET_INPUT_VAL,SET_RES_MESSAGE} from './commons';
import axios from 'axios';
export const setInputVal=(data)=>({type: SET_INPUT_VAL, payLoad:data});
export const requestLogin=(data,history)=>{
    return dispatch=>{
        axios.post('/login',data).then(res=>{
            if(res.data.code===200){
                dispatch({type:SET_RES_MESSAGE,payLoad:{msg:'登陆成功!',user:data.nickname}});
                setTimeout(()=>{
                    history.push('/home');
                },1500);
            }else if(res.data.code===403){
                dispatch({type:SET_RES_MESSAGE,payLoad:{msg:'用户名或密码错误！'}});
            }
        }).catch(err=>{
            dispatch({type:SET_RES_MESSAGE,payLoad:{msg:'未知错误，请重试！'}});
        })
    }
}