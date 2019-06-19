import React,{Component} from 'react';
import {Wrapper,RadioItem} from './style';
class RadioGroup extends Component{
    constructor(props){
        super(props);
        this.state={
            selected:[]
        };
    }
    selectItem(val){
        const {selected}=this.state;
        if(selected.includes(val)){
            this.setState({
                selected:[]
            })
        }else{
            this.setState({
                selected:[val]
            })
        }
    }
    render(){
        const {styles,selects} = this.props;
        const {selected}=this.state;
        const radios=selects.map(item=>(
            <RadioItem value={item.value} onClick={this.selectItem.bind(this,item.value)} key={item.value}>
                <i className={selected.includes(item.value)?'active':''}></i><span>{item.name}</span>
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