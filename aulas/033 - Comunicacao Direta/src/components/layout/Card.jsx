import './Card.css';
import React from "react";

export default function Card(props) {
    const { titulo, children, color } = props;

    /**
     * props.children -> Acessa os conteúdos passados para dentro de um componente.
     * exemplo:
     * <Primeiro>
     *      <Segundo></Segundo>
     * </Primeiro>
     */

    /**
     * Para utilizar estilo dentro de um código JSX
     * é passado um objeto contendo os parâmetros de css
     */
    const estilo = {
        backgroundColor: color ?? '#008'
    };

    return (
        // Para acessar a propriedade que lê o class do css
        // usa-se className
        <div className="Card" style={estilo}>
            <h2>{titulo}</h2>
            <div className="Conteudo">
                {children}
            </div>
        </div>
    );
}