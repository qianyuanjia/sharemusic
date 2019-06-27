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
export const getSongList = (replaceAll = true) => {
    return (dispatch, getState) => {
        const state = getState();
        const curSource = state.getIn(['home', 'curSource']);
        const keywords = state.getIn(['home', 'keywords']);
        const audio = state.getIn(['home', 'audio']).toJS();
        axios.get('/getSongList', {
            params: {
                source: curSource,
                keywords,
                page:audio.page,
                pageSize:audio.pageSize
            }
        }).then(res => {
            if (replaceAll) {
                dispatch({
                    type: SET_AUDIO_CONFIG,
                    payLoad: {
                        audio: fromJS({
                            ...audio,
                            songList: res.data.song.list,
                            curSong: res.data.song.list[0] || {}
                        })
                    }
                })
            } else {
                dispatch({
                    type: SET_AUDIO_CONFIG,
                    payLoad: {
                        audio: fromJS({
                            ...audio,
                            songList: audio.songList.concat(res.data.song.list)
                        })
                    }
                })
            }
        })
    }
}
export const changeAudioConfig =(config)=>{
    return {
        type:SET_AUDIO_CONFIG,
        payLoad:fromJS(config)
    }
}