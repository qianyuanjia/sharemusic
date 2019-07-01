import {SET_CUR_USER} from './commons';
import axios from 'axios';
export const getCurUser=(history)=>{
    return dispatch=>{
        axios.get('/curUser').then(res=>{
            let curUser=res.data;
            if(!curUser){
                history.push('/login');
            }else{
                dispatch({type:SET_CUR_USER,payLoad:curUser});
            }
        }).catch(err=>{
            history.push('/login');
        })
    }
}

export const logout=(history)=>{
    return dispatch=>{
        axios.get('/logout').then(res=>{
            history.push('/login');
            dispatch({type:SET_CUR_USER,payLoad:''});
        }).catch(err=>{
            history.push('/login');
            dispatch({type:SET_CUR_USER,payLoad:''});
        })
    }
}