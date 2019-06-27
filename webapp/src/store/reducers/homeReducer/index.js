import {fromJS} from 'immutable';
import {SET_KEY_WORDS,SET_SOURCES,CHANGE_SOURCE,SET_AUDIO_CONFIG} from './commons';
let initialState=fromJS({
    keywords:'',
    sources:[],
    curSource:'qq',
    audio:{
        play:false,
        songList:[],
        curSong:{},
        page:1,
        pageSize:5,
        scale:100,
        curSrc:'',
        volume:0.5,
    }
});
export default (state=initialState,action)=>{
    switch(action.type){
        case SET_KEY_WORDS:
            return state.set('keywords',action.payLoad);
        case SET_SOURCES:
            return state.set('sources',action.payLoad);
        case CHANGE_SOURCE:
            return state.set('curSource',action.payLoad);
        case SET_AUDIO_CONFIG:
            return state.merge(action.payLoad);
        default:
            return state;
    }
}