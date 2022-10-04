// Para importar um arquivo css relativo da pasta
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

const tag = <strong><p>Olá, React !</p></strong>;

ReactDOM.render(
    <div>
        { tag }
    </div>,
    document.querySelector('#root')
);