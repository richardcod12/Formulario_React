import logo from './kratos.gif';
import './App.css';

function App() {

  const nome = "Richard"
  const idade = 21
  const aniversario = "10"

  return (
    <div className="App">
      <header className="App-header">
        <p>Olá seja muito bem vindo(a)</p>
        <img src={logo} className="App-logo" alt="logo" />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>Olá meu nome é {nome}, tenho {idade} anos, faço aniversario no dia {aniversario} de fevereiro, valeu pela visita !!</p>
      </header>
    </div>
  );
}

export default App;
