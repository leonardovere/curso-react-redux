import React, { Component } from "react";
import Botoes from "./Botoes";
import './Contador.css';
import Display from "./Display";
import InputPasso from "./InputPasso";

/**
 * Exemplo de componente JSX utilizando classes
 */
class Contador extends Component {
    /**
     * Objeto state representa os valores que serão controlados pelo seu estado
     * dentro do componte baseado em classe
     */
    state = {
        /**
         * Para acessar as propriedades passadas pela instância:
         * this.props
         */
        numero: this.props.inicial ?? 0,
        pulo: this.props.pulo ?? 1,
    }

    incrementar = () => {
        /**
         * Valor passado ao setState se referere ao objeto criado na classe
         */
        this.setState({
            numero: (this.state.numero + this.state.pulo)
        });
    }

    decrementar = () => {
        this.setState({
            numero: (this.state.numero - this.state.pulo)
        });
    }

    setPulo = (ev) => {
        const pulo = parseInt(ev.target.value);
        this.setState({ pulo });
    }

    setInicial = (ev) => {
        const numero = parseInt(ev.target.value);
        this.setState({ numero });
    }

    /**
     * Método render é acionado toda vez que for renderizado o componente 
     */
    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>Pulando de {this.state.pulo} em {this.state.pulo}</p>
                {
                    /**
                     * Para acessar as propriedades passadas pela instância:
                     * this.props
                     */
                }

                <InputPasso pulo={this.state.pulo} numero={this.state.numero} setPulo={this.setPulo} setInicial={this.setInicial} />

                <Botoes incrementar={this.incrementar} decrementar={this.decrementar}>
                    <Display numero={this.state.numero} />
                </Botoes>
            </div>
        )
    }
}

export default Contador;