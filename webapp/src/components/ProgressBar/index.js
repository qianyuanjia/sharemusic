import React,{Component} from 'react';
import {Wrapper} from './style';
class ProgressBar extends Component{
    render(){
        const {styles,percent,clickEv} =this.props;
        return (
            <Wrapper style={styles} percent={percent} onClick={clickEv}>
                <div></div>
            </Wrapper>
        );
    }
}

export default ProgressBar;