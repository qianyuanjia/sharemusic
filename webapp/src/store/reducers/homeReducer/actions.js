import {GET_USER_LIST} from './commons';
export function getUserList(){
    return async(dispatch,getState) => {
        let response = await fetch(url);
        //这里的type一定要全局唯一,因为状态变一次每个Reducer都会根据类型比对一遍
        dispatch({type: GET_USER_LIST, payLoad: response.json});
    }
}