import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux';
import {commonCreators as actionCreators} from '@/store/reducers';
import {BodyWrapper,SearchInput,} from './style';
import {Header,RadioGroup,AudioPlayer} from '@/components';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            sources:[
                {name:'网易',value:'netease'},
                {name:'ＱＱ',value:'qq'},
                {name:'酷狗',value:'kugou'},
                {name:'酷我',value:'kuwo'},
                {name:'虾米',value:'xiami'},
                {name:'百度',value:'baidu'},
            ]
        };
    }
    componentWillMount(){
        const {history,getCurUser}=this.props;
        getCurUser(history);
    }
    render(){
        const {sources}=this.state;
        return (
            <Fragment>
                <Header />
                <BodyWrapper>
                    <header>
                        <SearchInput>
                            <input type="text" placeholder="请输入歌曲、歌手关键字"/>
                            <span>搜索</span>
                        </SearchInput>
                        <RadioGroup selects={sources} styles={{width:'500px',marginTop:'20px'}}/>
                    </header>
                    <main>
                        <AudioPlayer scale={100} />
                    </main>
                </BodyWrapper>
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