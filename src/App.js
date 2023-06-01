// import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import Home from './pages/Home';
import Tweets from './pages/Tweets';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Tweets/>
      {/* <div className="App">
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
        </header>
      </div> */}
    </>
  );
}

export default App;
