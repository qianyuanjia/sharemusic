import {combineReducers} from 'redux-immutable';
import homeReducer from './homeReducer';
import registerReducer from './registerReducer';
// import * as homeActions from './homeReducer/actions';
import * as registerActionCreators from './registerReducer/actionCreators';
export const reducers= combineReducers({
    home: homeReducer,
    register:registerReducer
});
export const registerCreators=registerActionCreators;
