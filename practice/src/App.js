import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Div>
        <span>Click!</span>
      </Div>
      </header>
    </div>
  );
}

export default App;

const Div = styled.div`
border-radius: 50%;
background-color: blue;
`
