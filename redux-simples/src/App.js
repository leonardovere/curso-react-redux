import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className='linha'>
        <Card title="Intervalo de Números" color="red">
          <Intervalo  />
        </Card>
      </div>

      <div className='linha'>
        <Card title="Média dos Números" color="green">
          <Media />
        </Card>

        <Card title="Soma dos Números" color="blue">
          <Soma />
        </Card>

        <Card title="Sorteio de um Número" color="purple">
          <Sorteio />
        </Card>
      </div>
    </div>
  );

  /* 
  --------- Sem REDUX -----------

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(10);

  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>

      <div className='linha'>
        <Card title="Intervalo de Números" color="red">
          <Intervalo setMin={setMin} setMax={setMax} />
        </Card>
      </div>

      <div className='linha'>
        <Card title="Média dos Números" color="green">
          <Media />
        </Card>

        <Card title="Soma dos Números" color="blue">
          <Soma />
        </Card>

        <Card title="Sorteio de um Número" color="purple">
          <Sorteio />
        </Card>
      </div>
    </div>
  ); */
}

export default App;
