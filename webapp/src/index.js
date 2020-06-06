import React from 'react';
import {render} from 'react-dom';
import Notifications from 'react-notify-toast'; 
import './global.css';
import App from './App';

const rootElem = document.getElementById('root');

render(
    <React.StrictMode>
        <App />
        <Notifications options={{zIndex: 9999}}/>
    </React.StrictMode>, rootElem
);