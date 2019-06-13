import {GET_USER_LIST} from './commons';
//初始化状态
let initialState = {
    officeList: [],
    officeInfo: {
        "id": "",
        "parent_id": "",
        "parent_ids": "",
        "name": "",
    },
};
export default (state = initialState, action) => {
    switch (action.type) {
        //处理 类型为 GET_OFFICE_LIST 结果数据
        case GET_USER_LIST:
            return Object.assign({}, state, {
                officeList: action.payLoad.data
            });
        default:
        //如果类型为匹配到 返回当前state
            return state;
    }
};