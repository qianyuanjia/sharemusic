import {
    SET_KEY_WORDS,
    SET_SOURCES,
    CHANGE_SOURCE,
    SET_AUDIO_CONFIG
} from './commons';
import {
    fromJS
} from 'immutable';
import axios from 'axios';
export const setKeyWord = (val) => {
    return {
        type: SET_KEY_WORDS,
        payLoad: val
    }
}
export const getSources = () => {
    return dispatch => {
        axios.get('/getSources').then(res => {
            dispatch({
                type: SET_SOURCES,
                payLoad: res.data
            })
        })
    }
}
export const changeSource = (val) => {
    return {
        type: CHANGE_SOURCE,
        payLoad: val
    }
}
export const getSongList = () => {
    return (dispatch, getState) => {
        const state = getState();
        const curSource = state.getIn(['home', 'curSource']);
        const keywords = state.getIn(['home', 'keywords']);
        const audio = state.getIn(['home', 'audio']).toJS();
        if(!keywords) return;
        axios.get('/getSongList', {
            params: {
                source: curSource,
                keywords,
                page: audio.page,
                pageSize: audio.pageSize
            }
        }).then(res => {
            const songList = res.data.song.list;
            const firstSong = songList[0] || {};
            if (firstSong.songmid) {
                axios.get('/getSongUrl', {
                    params: {
                        songmid: firstSong.songmid
                    }
                }).then(res => {
                    dispatch({
                        type: SET_AUDIO_CONFIG,
                        payLoad: {
                            audio: fromJS({
                                ...audio,
                                songList: songList,
                                curSong: firstSong,
                                curSrc: res.data
                            })
                        }
                    })
                    console.log(res.data)
                }).catch(err => {
                    console.log(err)
                    dispatch({
                        type: SET_AUDIO_CONFIG,
                        payLoad: {
                            audio: fromJS({
                                ...audio,
                                songList: songList,
                                curSong: firstSong
                            })
                        }
                    })
                })
            } else {
                dispatch({
                    type: SET_AUDIO_CONFIG,
                    payLoad: {
                        audio: fromJS({
                            ...audio,
                            songList: songList,
                            curSong: firstSong
                        })
                    }
                })
            }
        })
    }
}
export const changeAudioConfig = (config) => {
    return {
        type: SET_AUDIO_CONFIG,
        payLoad: fromJS(config)
    }
}
export const loadMoreSong = () => {
    return (dispatch, getState) => {
        const state = getState();
        const audio = state.getIn(['home', 'audio']).toJS();
        const keywords = state.getIn(['home', 'keywords']);
        const curSource = state.getIn(['home', 'curSource']);
        axios.get('/getSongList', {
            params: {
                source: curSource,
                keywords,
                page: audio.page + 1,
                pageSize: audio.pageSize
            }
        }).then(res => {

            dispatch({
                type: SET_AUDIO_CONFIG,
                payLoad: {
                    audio: fromJS({
                        ...audio,
                        page: audio.page + 1,
                        songList: audio.songList.concat(res.data.song.list)
                    })
                }
            })
        })

    }
}

export const changeSong = (song,cantPlay) => {
    return (dispatch, getState) => {
        const state = getState();
        const audio = state.getIn(['home', 'audio']).toJS();
        axios.get('/getSongUrl', {
            params: {
                songmid: song.songmid
            }
        }).then(res => {
            if(res.data.slice(-1)==="="){
                cantPlay();
            }else{
                dispatch({
                    type: SET_AUDIO_CONFIG,
                    payLoad: {
                        audio: fromJS({
                            ...audio,
                            curSong: song,
                            play: true,
                            curSrc: res.data
                        })
                    }
                })
            }
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
       
    }
}