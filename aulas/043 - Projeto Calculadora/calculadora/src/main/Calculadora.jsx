import React, { Component } from 'react';
import Botao from '../components/Botao';
import Display from '../components/Display';
import './Calculadora.css';

/**
 * Definindo o estado inicial da calculadora
 */
const initialState = {
    display: '0',
    clearDisplay: false,
    operacao: null,
    valores: [0, 0],
    indice: 0,
};

class Calculadora extends Component {
    state = { ...initialState }

    constructor(props) {
        super();
        this.limparMemoria = this.limparMemoria.bind(this);
        this.setarOperacao = this.setarOperacao.bind(this);
        this.setarDigito = this.setarDigito.bind(this);
    }

    limparMemoria() {
        this.setState({ ...initialState });
    }

    setarOperacao(operacao) {
        if (this.state.indice === 0) {
            const indice = 1;
            const clearDisplay = true;

            this.setState({ indice, clearDisplay, operacao });
        } else {
            const equals = (operacao === '=');

            const valores = [...this.state.valores];
            let res = 0;

            /* Executa um código JS passando apenas String */
            /* res = eval(`${valores[0]} ${this.state.operacao} ${valores[1]}`); */

            switch (this.state.operacao) {
                case '+':
                    res = valores[0] + valores[1];
                    break;
                case '-':
                    res = valores[0] - valores[1];
                    break;
                case '/':
                    res = valores[0] / valores[1];
                    break;
                case '*':
                    res = valores[0] * valores[1];
                    break;

                default:
                    break;
            }

            valores[0] = res;
            valores[1] = 0;

            this.setState({
                display: res,
                valores,
                operacao: equals ? null : operacao,
                indice: equals ? 0 : 1,
                clearDisplay: !equals,
            });
        }
    }

    setarDigito(d) {
        // Verifica se já tem um . setado no display
        if (d === '.' && this.state.display.includes('.')) {
            return;
        }

        /**
         * Verifica se o único valor setado no display é igual a 0
         * ou se a propriedade clearDisplay está setada como verdadeiro
         */
        const clearDisplay = this.state.display === '0' || this.state.clearDisplay;
        const atual = clearDisplay ? '' : this.state.display;
        const novo = atual + d;

        this.setState({ display: novo, clearDisplay: false });

        if (d !== '.') {
            const convertido = Number(novo);
            const valores = [...this.state.valores];
            valores[this.state.indice] = convertido;

            this.setState({ valores });
            console.log(valores);
        }
    }

    render() {
        return (
            <div className="calculadora">
                <Display resultado={this.state.display} />
                <Botao classes={['triplo']} valor="AC" onClick={() => this.limparMemoria()} />
                <Botao classes={['operation']} valor="/" onClick={(op) => this.setarOperacao(op)} />
                <Botao valor={7} onClick={(value) => this.setarDigito(value)} />
                <Botao valor={8} onClick={(value) => this.setarDigito(value)} />
                <Botao valor={9} onClick={(value) => this.setarDigito(value)} />
                <Botao classes={['operation']} valor="*" onClick={(op) => this.setarOperacao(op)} />
                <Botao valor={4} onClick={(value) => this.setarDigito(value)} />
                <Botao valor={5} onClick={(value) => this.setarDigito(value)} />
                <Botao valor={6} onClick={(value) => this.setarDigito(value)} />
                <Botao classes={['operation']} valor="-" onClick={(op) => this.setarOperacao(op)} />
                <Botao valor={1} onClick={(value) => this.setarDigito(value)} />
                <Botao valor={2} onClick={(value) => this.setarDigito(value)} />
                <Botao valor={3} onClick={(value) => this.setarDigito(value)} />
                <Botao classes={['operation']} valor="+" onClick={(op) => this.setarOperacao(op)} />
                <Botao classes={['dobro']} valor={0} onClick={(value) => this.setarDigito(value)} />
                <Botao valor="." onClick={(value) => this.setarDigito(value)} />
                <Botao classes={['operation']} valor="=" onClick={(op) => this.setarOperacao(op)} />
            </div>
        )
    }
}

export default Calculadora;
