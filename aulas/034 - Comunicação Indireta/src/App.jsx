import React from "react";

import './App.css';
import Card from "./components/layout/Card";
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComPropriedade from './components/basicos/ComPropriedade';
import Primeiro from './components/basicos/Primeiro';
import Familia from "./components/basicos/Familia";
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

// eslint-disable-next-line 
export default _ => (
    <div id="app">
        <h1>Fundamentos React</h1>

        <div className="cards">
            <Card titulo="#10 - Exercício: Comunicação indireta" color="#455359">
                <IndiretaPai />
            </Card>

            <Card titulo="#9 - Exercício: Comunicação direta" color="#590212">
                <DiretaPai />
            </Card>

            <Card titulo="#8 - Exercício: Condicional" color="#04D94F">
                <ParOuImpar numero={Math.round(Math.random() * 100)} />
                <UsuarioInfo usuario={{ nome: 'Leonardo Roberto' }} />
                <UsuarioInfo usuario={{ email: 'leonardovere@hotmail.com' }} />
            </Card>

            <Card titulo="#7 - Desafio: Repetição" color="#154EBF">
                <TabelaProdutos />
            </Card>

            <Card titulo="#6 - Exercício: Repetição" color="#4A96D9">
                <ListaAlunos />
            </Card>

            <Card titulo="#5 - Exercícico: Componente com Filhos" color="#732929">
                <Familia sobrenome="Ferreira" >
                    <FamiliaMembro nome="Leonardo Roberto" />
                    <FamiliaMembro nome="Oldair Roberto" />
                    <FamiliaMembro nome="Odete" />
                    <FamiliaMembro nome="Janaina" />
                </Familia>
            </Card>

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