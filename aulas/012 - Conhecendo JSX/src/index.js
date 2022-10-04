// Import do modulo que trabalha a manipulação do DOM com o React
import React from 'react';
import ReactDOM from 'react-dom';

// É possível criar variáveis que armazenem código JSX
const tag = <strong><p>Olá, Mundo com Constante!</p></strong>;

ReactDOM.render(
    // JSX converte código com sintaxe parecida com HTML em código para JS
    <div>
        <strong>Olá, Mundo!</strong>
        { tag }
    </div>,
    document.querySelector('#root')
);