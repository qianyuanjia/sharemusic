import {combineReducers} from 'redux-immutable';
import homeReducer from './homeReducer';
import registerReducer from './registerReducer';
import loginReducer from './loginReducer';
import commonReducer from './commonReducer';

import * as homeActionCreators from './homeReducer/actionCreators';
import * as registerActionCreators from './registerReducer/actionCreators';
import * as loginActionCreators from './loginReducer/actionCreators';
import * as commonActionCreators from './commonReducer/actionCreators';

export const reducers= combineReducers({
    home: homeReducer,
    register:registerReducer,
    login:loginReducer,
    common:commonReducer
});

export const registerCreators=registerActionCreators;
export const loginCreators=loginActionCreators;
export const commonCreators=commonActionCreators;
export const homeCreators=homeActionCreators;
