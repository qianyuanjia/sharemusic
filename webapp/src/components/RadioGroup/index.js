import React,{Component} from 'react';
import {Wrapper,RadioItem} from './style';
class RadioGroup extends Component{
    selectItem(val){
        const {value,selectAction} = this.props;
        if(value===val){
            selectAction('');
        }else{
            selectAction(val);
        }
    }
    render(){
        const {styles,selects,value} = this.props;
        const radios=selects.map(item=>(
            <RadioItem onClick={this.selectItem.bind(this,item.value)} key={item.value}>
                <i className={value===item.value?'active':''}></i><span>{item.name}</span>
            </RadioItem>
        ));
        return (
            <Wrapper style={styles}>
                {radios}
            </Wrapper>
        );
    }
}
export default RadioGroup;