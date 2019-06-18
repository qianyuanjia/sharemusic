import React,{Component} from 'react';
import { connect } from 'react-redux';
import {commonCreators as actionCreators} from '@/store/reducers';
import {Wrapper} from './style';

class Home extends Component{
    componentWillMount(){
        const {history,getCurUser}=this.props;
        getCurUser(history);
    }
    render(){
        return (
            <Wrapper>
                hello
            </Wrapper>
        );
    }
}
const mapState=(state)=>{
    return {
        curuser:state.getIn(['common','curuser'])
    }
}
const mapDispatch=(dispatch)=>{
    return {
        getCurUser(history){
            dispatch(actionCreators.getCurUser(history));
        }
    }
}
export default connect(mapState,mapDispatch)(Home);