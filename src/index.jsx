import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import App from './App';

const IndexStyled = styled.div`
  margin: 0;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Reset />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

export default IndexStyled;
