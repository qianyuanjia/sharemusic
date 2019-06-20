import React,{Component} from 'react';
import {Wrapper} from './style';
class ProgressBar extends Component{
    render(){
        const {styles,percent} =this.props;
        return (
            <Wrapper style={styles} percent={percent}>
                <div></div>
            </Wrapper>
        );
    }
}

export default ProgressBar;