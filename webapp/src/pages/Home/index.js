import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux';
import {commonCreators as actionCreators} from '@/store/reducers';
import {} from './style';
import {Header} from '@/components';

class Home extends Component{
    componentWillMount(){
        const {history,getCurUser}=this.props;
        getCurUser(history);
    }
    render(){
        return (
            <Fragment>
                <Header />
            </Fragment>
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