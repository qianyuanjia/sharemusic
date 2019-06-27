import React,{Component,Fragment} from 'react';
import { connect } from 'react-redux';
import {commonCreators as commonActionCreators} from '@/store/reducers';
import {homeCreators as homeActionCreators} from '@/store/reducers';
import {BodyWrapper,SearchInput,} from './style';
import {Header,RadioGroup,AudioPlayer} from '@/components';

class Home extends Component{
    async componentWillMount(){
        const {history,getCurUser}=this.props;
        await getCurUser(history);
        this.init();
    }
    init(){
        const {getSources}=this.props;
        getSources();
    }
    render(){
        const {keywords,sources,curSource,audio,setKeyWord,changeSource,getSongList,changeAudioConfig,loadMoreSong}=this.props;
        const audioConfig=audio.toJS();
        return (
            <Fragment>
                <Header />
                <BodyWrapper>
                    <header>
                        <SearchInput>
                            <input type="text" placeholder="请输入歌曲、歌手关键字" value={keywords} onChange={setKeyWord} onKeyDown={getSongList}/>
                            <span onClick={getSongList}>搜索</span>
                        </SearchInput>
                        <RadioGroup selects={sources} styles={{width:'500px',marginTop:'20px'}} value={curSource} selectAction={changeSource}/>
                    </header>
                    <main>
                        {audioConfig.songList.length>0 && <AudioPlayer config={audioConfig} 
                        changeAudioConfig={changeAudioConfig} loadMoreSong={loadMoreSong}/>}
                    </main>
                </BodyWrapper>
            </Fragment>
        );
    }
}
const mapState=(state)=>{
    return {
        curuser:state.getIn(['common','curuser']),
        keywords:state.getIn(['home','keywords']),
        sources:state.getIn(['home','sources']),
        curSource:state.getIn(['home','curSource']),
        audio:state.getIn(['home','audio']),
    }
}
const mapDispatch=(dispatch)=>{
    return {
        getCurUser(history){
            dispatch(commonActionCreators.getCurUser(history));
        },
        setKeyWord(ev){
            dispatch(homeActionCreators.setKeyWord(ev.target.value));
        },
        getSources(){
            dispatch(homeActionCreators.getSources());
        },
        changeSource(val){
            dispatch(homeActionCreators.changeSource(val));
        },
        getSongList(ev){
            if(!ev.keyCode || ev.keyCode===13){
                dispatch(homeActionCreators.getSongList());
            }
        },
        changeAudioConfig(config){
            dispatch(homeActionCreators.changeAudioConfig(config));
        },
        loadMoreSong(){
            dispatch(homeActionCreators.loadMoreSong());
        }
    }
}
export default connect(mapState,mapDispatch)(Home);