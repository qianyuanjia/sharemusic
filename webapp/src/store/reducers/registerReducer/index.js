import {fromJS} from 'immutable';
import {SET_INPUT_VAL,SET_IS_VALID,SET_RES_INFO} from './commons';
let initialState=fromJS({
    nickname:'',
    password:'',
    repassword:'',
    isvalid:false,
    resinfo:''
});
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_INPUT_VAL:
            return state.set(action.payLoad.key,action.payLoad.val);
        case SET_IS_VALID:
            return state.set('isvalid',action.payLoad);
        case SET_RES_INFO:
            return state.set('resinfo',action.payLoad);
        default:
            return state;
    }
}