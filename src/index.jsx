import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import App from './App';

const BackgroundApp = styled.div`
  background-image: url(./img/bg.jpg);
  background-size: cover;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BackgroundApp>
        <Reset />
        <App />
      </BackgroundApp>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

export default BackgroundApp;
