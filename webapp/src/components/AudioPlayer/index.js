import React,{Component} from 'react';
import {Wrapper,HeadPic,PlayControls,SongList,ListItem} from './style';
import ProgressBar from '../ProgressBar';
class AudioPlayer extends Component{
    render(){
        const {scale}=this.props;
        return (
            <Wrapper scale={scale}>
                <header>
                    <HeadPic scale={scale}/>
                    <PlayControls scale={scale}>
                        <h2>爱存在</h2>
                        <h3>王安石</h3>
                        <section>
                            <div>
                                <i className="iconfont">&#xe655;</i>
                                <i className="iconfont">&#xe713;</i>
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
                <SongList>
                    <ListItem>
                        <div>
                            <span>1</span>
                            <span>黄昏</span>
                            <span>周传雄</span>
                        </div>
                        <i className="iconfont">&#xe865;</i>
                    </ListItem>
                </SongList>
            </Wrapper>
        );
    }
}
export default AudioPlayer;