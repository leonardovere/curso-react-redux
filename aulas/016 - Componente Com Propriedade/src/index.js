import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './components/basicos/Primeiro';
import ComPropriedade from './components/basicos/ComPropriedade';

/**
 * Passa-se parâmetros semelhante ao HTML
 */

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <ComPropriedade titulo="Situacao do aluno" aluno="Leonardo Roberto" nota={9.3} />
        <ComPropriedade titulo="Situacao do aluno" aluno="Marcela de Oliveira" nota={6.9} />
    </div>,
    document.querySelector('#root')
);