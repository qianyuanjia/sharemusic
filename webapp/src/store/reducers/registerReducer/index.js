import {fromJS} from 'immutable';
import {SET_INPUT_VAL} from './commons';
let initialState=fromJS({
    nickname:'',
    password:'',
    repassword:''
});
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_INPUT_VAL:
            return state.set(action.payLoad.key,action.payLoad.val);
        default:
            return state;
    }
}