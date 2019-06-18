import {fromJS} from 'immutable';
import {SET_CUR_USER} from './commons';
let initialState=fromJS({
    curuser:''
});
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_CUR_USER:
            return state.set('curuser',action.payLoad);
        default:
            return state;
    }
}