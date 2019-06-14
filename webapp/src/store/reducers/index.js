import {combineReducers} from 'redux-immutable';
import homeReducer from './homeReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
// import * as homeActions from './homeReducer/actions';
import * as registerActionCreators from './registerReducer/actionCreators';
import * as loginActionCreators from './loginReducer/actionCreators';
export const reducers= combineReducers({
    home: homeReducer,
    register:registerReducer,
    login:loginReducer
});
export const registerCreators=registerActionCreators;
export const loginCreators=loginActionCreators;
