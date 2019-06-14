import {fromJS} from 'immutable';
import {SET_INPUT_VAL,SET_RES_MESSAGE} from './commons';
let initialState=fromJS({
    nickname:'',
    password:'',
    resinfo:'',
    curUser:'',
});
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_INPUT_VAL:
            return state.set(action.payLoad.key,action.payLoad.val);
            case SET_RES_MESSAGE:
                if(action.payLoad.msg==="登陆成功!"){
                    return state.merge({
                        resinfo:action.payLoad.msg,
                        curUser:action.payLoad.user
                    });
                }else{
                    return state.set('resinfo',action.payLoad.msg);
                }
        default:
            return state;
    }
}