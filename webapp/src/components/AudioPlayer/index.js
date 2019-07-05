import React,{Component} from 'react';
import {Wrapper,HeadPic,PlayControls,SongList,ListItem,LoadMore} from './style';
import ProgressBar from '../ProgressBar';
import Message from '../Message';
class AudioPlayer extends Component{
    constructor(props){
        super(props);
        this.state={
            showMessage:false,
            player:new Audio(),
            percent:0
        };
        this.startPlay=this.startPlay.bind(this);
        this.changeVolume=this.changeVolume.bind(this);
        this.changeTime=this.changeTime.bind(this);
    }
    startPlay(){
        const {config,changeAudioConfig}=this.props; 
        if(config.curSrc.slice(-1)==="="){
           this.cantPlay();
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
    componentDidMount(){
        const {player}=this.state;
        player.addEventListener("timeupdate", ()=>{ 
            this.setState({percent:player.currentTime/player.duration*100})
        });
        player.addEventListener("ended", ()=>{ 
            const {autoplay,songList,curSong}=this.props.config;
            const {changeSong}=this.props;
            const len=songList.length;
            const index=songList.findIndex(item=>curSong.songmid===item.songmid);
            if(!autoplay){
                changeSong(songList[index<len-1?index+1:0],this.cantPlay.bind(this));
            }
        });
    }
    changeVolume(ev){
        const width=ev.currentTarget.offsetWidth;
        const inWidth=ev.pageX-ev.currentTarget.offsetLeft;
        const volume=inWidth/width;
        const {config,changeAudioConfig}=this.props;
        changeAudioConfig({audio:{...config,volume}})
    }
    changeTime(ev){
        const width=ev.currentTarget.offsetWidth;
        const inWidth=ev.pageX-ev.currentTarget.offsetLeft;
        const count=inWidth/width;
        const {player}=this.state;
        player.currentTime=count*player.duration;
    }
    render(){
        const {config,changeAudioConfig,loadMoreSong,changeSong}=this.props;
        const {scale,songList,curSong,play,curSrc,volume,autoplay}=config;
        const {showMessage,player,percent}=this.state;
        let index=0;
        const len=songList.length;
        const songs=songList.map((item,idx)=>{
            if(curSong.songmid===item.songmid) index=idx;
            return (
                <ListItem key={item.songmid} onClick={changeSong.bind(null,item,this.cantPlay.bind(this))}>
                    <div>
                        <span>{idx+1}</span>
                        <span>{item.songname}</span>
                        <span>{item.singer.map(singer=>singer.name).join('，')}</span>
                    </div>
                    {curSong.songmid===item.songmid && play?<i className="iconfont">&#xe865;</i>:<i className="iconfont">&#xe713;</i>}
                </ListItem>
            )
        });
        const imgSrc=curSong.albumid?`http://imgcache.qq.com/music/photo/album_300/${curSong.albumid%100}/300_albumpic_${curSong.albumid}_0.jpg`:'';
        
        if(curSrc!==player.src) player.src=curSrc;
        player.volume=volume;
        player.autoplay=autoplay;
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
                                <i className="iconfont" onClick={changeSong.bind(null,songList[index>0?index-1:len-1],this.cantPlay.bind(this))}>&#xe655;</i>
                                {play?<i className="iconfont" onClick={changeAudioConfig.bind(null,{audio:{...config,play:false}})}>&#xe865;</i>
                                :<i className="iconfont" onClick={this.startPlay}>&#xe713;</i>}
                                <i className="iconfont" onClick={changeSong.bind(null,songList[index<len-1?index+1:0],this.cantPlay.bind(this))}>&#xe654;</i>
                            </div>
                            <div>
                                <i className="iconfont">&#xe627;</i>
                                <ProgressBar styles={{width:'80px',height:'6px',display:'inline-block'}} percent={volume*100} clickEv={this.changeVolume}/>
                            </div>
                        </section>
                        <ProgressBar styles={{height:'8px',marginTop:'15px'}} percent={percent} clickEv={this.changeTime}/>
                        <footer>
                            <span>{this.transTime(~~player.currentTime)}</span>
                            <p>
                                <span>{this.transTime(~~player.duration)}</span>
                                <i  className={autoplay?'active iconfont':'iconfont'}
                                 onClick={changeAudioConfig.bind(null,{audio:{...config,autoplay:true}})}>&#xe66c;</i> 
                                <i  className={autoplay?'iconfont':'active iconfont'}
                                onClick={changeAudioConfig.bind(null,{audio:{...config,autoplay:false}})}>&#xe625;</i> 
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