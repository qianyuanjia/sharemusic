import React,{Component} from 'react';
import {Wrapper,HeadPic,PlayControls,SongList,ListItem,LoadMore} from './style';
import ProgressBar from '../ProgressBar';
import Message from '../Message';
class AudioPlayer extends Component{
    constructor(props){
        super(props);
        this.state={
            showMessage:false,
            player:new Audio()
        };
        this.startPlay=this.startPlay.bind(this);
    }
    startPlay(){
        const {config,changeAudioConfig}=this.props; 
        if(config.curSrc.slice(-1)==="="){
            this.setState({
                showMessage:false
            },()=>{
                this.setState({
                    showMessage:true
                });
            })
        }else{
            changeAudioConfig.call(null,{audio:{...config,play:true}});
        }
    }
    cantPlay(){
        this.setState({
            showMessage:false
        },()=>{
            this.setState({
                showMessage:true
            });
        })
    }
    transTime(seconds){
        let minutes=(~~(seconds/60)).toString().padStart(2,'0');
        let secs=(seconds%60).toString().padStart(2,'0');
        return minutes+':'+secs;
    }
    render(){
        const {config,changeAudioConfig,loadMoreSong,changeSong}=this.props;
        const {scale,songList,curSong,play,curSrc,volume}=config;
        const {showMessage,player}=this.state;
        const songs=songList.map((item,idx)=>(
            <ListItem key={item.songmid} onClick={changeSong.bind(null,item,this.cantPlay.bind(this))}>
                <div>
                    <span>{idx+1}</span>
                    <span>{item.songname}</span>
                    <span>{item.singer.map(singer=>singer.name).join('，')}</span>
                </div>
                {curSong.songmid===item.songmid?<i className="iconfont">&#xe865;</i>:<i className="iconfont">&#xe713;</i>}
            </ListItem>
        ));
        const imgSrc=curSong.albumid?`http://imgcache.qq.com/music/photo/album_300/${curSong.albumid%100}/300_albumpic_${curSong.albumid}_0.jpg`:'';
        
        player.src=curSrc;
        player.volume=volume;
        play?player.play():player.pause();
        return (
            <Wrapper scale={scale}>
                {showMessage && <Message content='贫穷使你听不了此歌！' type="error"/>}
                <header>
                    <HeadPic scale={scale} src={imgSrc}/>
                    <PlayControls scale={scale}>
                        <h2>{curSong.songname}</h2>
                        <h3>{curSong.singer?curSong.singer.map(singer=>singer.name).join('，'):''}</h3>
                        <section>
                            <div>
                                <i className="iconfont">&#xe655;</i>
                                {play?<i className="iconfont" onClick={changeAudioConfig.bind(null,{audio:{...config,play:false}})}>&#xe865;</i>
                                :<i className="iconfont" onClick={this.startPlay}>&#xe713;</i>}
                                <i className="iconfont">&#xe654;</i>
                            </div>
                            <div>
                                <i className="iconfont">&#xe627;</i>
                                <ProgressBar styles={{width:'80px',height:'6px',display:'inline-block'}} percent={volume*100}/>
                            </div>
                        </section>
                        <ProgressBar styles={{height:'8px',marginTop:'15px'}} percent={50}/>
                        <footer>
                            <span>{this.transTime(~~player.currentTime)}</span>
                            <p>
                                <span>{this.transTime(~~player.duration)}</span>
                                <i className="iconfont">&#xe66c;</i> 
                                <i className="iconfont">&#xe625;</i> 
                            </p>
                        </footer>
                    </PlayControls>
                </header>
                {songs.length>0 && <SongList>{songs}<LoadMore onClick={loadMoreSong}>加载更多</LoadMore></SongList>}
            </Wrapper>
        );
    }
}
export default AudioPlayer;