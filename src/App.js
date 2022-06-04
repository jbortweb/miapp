import logo from './logo.svg';
import './App.css';

function App() {
    const hola = <h2>Bienvenido al curso de React</h2>
    const saluda = persona => <h2>Hola {persona}</h2> //Funcion flecha
  return (
    <div className="App">
      <header className="App-header">
        {saluda('Jordi')}
        {hola}
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
    </div>
  );
}

export default App;
