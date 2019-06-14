import React from 'react';
import {Wrapper} from './style';
const typeEntity={
    success:'e64e',
    error:'e62b'
};
export default props=>(
    <Wrapper top={props.top} type={props.type} duration={props.duration}>
        <i className="iconfont" dangerouslySetInnerHTML={{__html:'&#x'+typeEntity[props.type || 'success']+';'}}></i>
        <span>{props.content}</span>
    </Wrapper>
);