import React from 'react';
import ReactDOM from 'react-dom';

import App from './app.js';
require('dotenv').config();
console.log('THIS IS THE PROCESS', process.env.REACT_APP_Q_SERVER)

class Main extends React.Component {
  render() {
    return <App />;
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
