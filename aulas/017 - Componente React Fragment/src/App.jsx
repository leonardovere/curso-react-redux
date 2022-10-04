import React from "react";

import Primeiro from './components/basicos/Primeiro';
import ComPropriedade from './components/basicos/ComPropriedade';
import Fragmento from './components/basicos/Fragmento';

// eslint-disable-next-line 
export default (_) => (
    <div id="app">
        <h1>Fundamentos React 2 Com</h1>
        <Fragmento />
        <ComPropriedade titulo="Situção do aluno" aluno="Leonardo Roberto" nota={9.3} />
        <Primeiro />
    </div>
);