import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import '@aws-amplify/ui-react/styles.css'; //これがないとスタイル当たらない
import CardC from './ui-components/CardC';
import CardB from './ui-components/CardB';

import { Card } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);

ReactDOM.render( <
    React.StrictMode >
    <
    CardC / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();