import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index.js';
import App from './components/App.jsx';
import './index.css';

ReactDOM.render (
    <App/>
    , document.getElementById('root')

)
