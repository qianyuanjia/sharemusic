import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {resetStyle} from '@/style/global.js';

ReactDOM.render(
<Provider>
    <App />
</Provider>
, document.getElementById('root'));


