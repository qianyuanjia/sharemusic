import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {ResetStyle} from '@/style/global.js';
import Iconfont from '@/assets/iconfont';
import store from '@/store';
ReactDOM.render(
<Provider store={store}>
    <ResetStyle/>
    <Iconfont />
    <App />
</Provider>
, document.getElementById('root'));


