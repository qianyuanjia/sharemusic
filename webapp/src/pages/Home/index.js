import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Home extends Component{
    componentWillMount(){
        const {history}=this.props;
        axios.get('/curUser').then(res=>{
            let curUser=res.data;
            if(!curUser){
                history.push('/login');
            }
        }).catch(err=>{
            history.push('/login');
        })
    }
    render(){
        return (
            <div>
                我是主页
            </div>
        );
    }
}
const mapState=(state)=>{
    return {
    }
}
const mapDispatch=()=>{
    return {

    }
}
export default connect(mapState,mapDispatch)(Home);