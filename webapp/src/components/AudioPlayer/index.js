import React,{Component} from 'react';
import {Wrapper,HeadPic,PlayControls,SongList,ListItem,LoadMore} from './style';
import ProgressBar from '../ProgressBar';

class AudioPlayer extends Component{
    render(){
        const {config,changeAudioConfig}=this.props;
        const {scale,songList,curSong,play}=config;
        const songs=songList.map((item,idx)=>(
            <ListItem key={item.songmid}>
                <div>
                    <span>{idx+1}</span>
                    <span>{item.songname}</span>
                    <span>{item.singer.map(singer=>singer.name).join('，')}</span>
                </div>
                <i className="iconfont">&#xe713;</i>
            </ListItem>
        ));
        const imgSrc=curSong.albumid?`http://imgcache.qq.com/music/photo/album_300/${curSong.albumid%100}/300_albumpic_${curSong.albumid}_0.jpg`:'';
        return (
            <Wrapper scale={scale}>
                <header>
                    <HeadPic scale={scale} src={imgSrc}/>
                    <PlayControls scale={scale}>
                        <h2>{curSong.songname}</h2>
                        <h3>{curSong.singer?curSong.singer.map(singer=>singer.name).join('，'):''}</h3>
                        <section>
                            <div>
                                <i className="iconfont">&#xe655;</i>
                                {play?<i className="iconfont" onClick={changeAudioConfig.bind(null,{audio:{...config,play:false}})}>&#xe865;</i>
                                :<i className="iconfont" onClick={changeAudioConfig.bind(null,{audio:{...config,play:true}})}>&#xe713;</i>}
                                <i className="iconfont">&#xe654;</i>
                            </div>
                            <div>
                                <i className="iconfont">&#xe627;</i>
                                <ProgressBar styles={{width:'80px',height:'6px',display:'inline-block'}} percent={50}/>
                            </div>
                        </section>
                        <ProgressBar styles={{height:'8px',marginTop:'15px'}} percent={50}/>
                        <footer>
                            <span>0:00</span>
                            <p>
                                <i className="iconfont">&#xe66c;</i> 
                                <i className="iconfont">&#xe625;</i> 
                            </p>
                        </footer>
                    </PlayControls>
                </header>
                {songs.length>0 && <SongList>{songs}<LoadMore>加载更多</LoadMore></SongList>}
            </Wrapper>
        );
    }
}
export default AudioPlayer;