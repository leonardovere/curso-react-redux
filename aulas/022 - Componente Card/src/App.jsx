import React from "react";

import './App.css';
import Card from "./components/layout/Card";
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComPropriedade from './components/basicos/ComPropriedade';
import Primeiro from './components/basicos/Primeiro';

// eslint-disable-next-line 
export default (_) => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <div className="cards">
            <Card titulo="#4 - Desafio: Número Aleatório" color="#4D1473">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#3 - Exercício: Fragmento" color="#6829A6">
                <Fragmento />
            </Card>

            <Card titulo="#2 - Exercício: Com Parâmetro" color="#656ABF">
                <ComPropriedade titulo="Situção do aluno" aluno="Leonardo Roberto" nota={9.3} />
            </Card>

            <Card titulo="#1 - Exercício: Primeiro" color="#7A8CBF">
                <Primeiro />
            </Card>
        </div>
    </div>
);