import {fromJS} from 'immutable';
import {} from './commons';
let initialState=fromJS({
});
export default (state=initialState,action)=>{
    switch(action.type){
        
        default:
            return state;
    }
}