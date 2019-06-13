import React from 'react';
import {Wrapper} from './style';
export default props=>(
    <Wrapper top={props.top}>
        <i className="iconfont">&#xe64e;</i>
        <span>{props.content}</span>
    </Wrapper>
);