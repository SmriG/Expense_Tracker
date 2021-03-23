import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Context/context';
import App from './App';
import './index.css';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
    <SpeechProvider appId='7facc49a-c5d3-4228-8a59-e6fb1863396a' language='en-US' >
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>
    ,
    document.getElementById('root')
    );