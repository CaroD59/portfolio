import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

const BackgroundApp = styled.div`
  background-image: url(./img/gba.png);
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <div className="App">
      <BackgroundApp>
        <Switch>
          <NavBar />
          <Route path="/login" component={Home} />
        </Switch>
      </BackgroundApp>
    </div>
  );
}

export default App;
