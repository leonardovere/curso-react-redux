import React from "react";

export default function Aleatorio(props) {
    let sortear = (min = 0, max = 0) => {
        return parseInt(Math.random() * (max - min)) + min;
    }

    /**
     * Destructuring
     * 
     * é possível abstrair informações de um objeto JavaScript
     */
    const { min, max } = props;

    const sorteado = sortear(min, max);

    return (
        <div>
            <h2>Desafio Valor Aleatório</h2>
            <p>O entre <strong>{props.min}</strong> e <strong>{props.max}</strong> , o valor sorteado foi <strong>{sorteado}</strong> !!</p>
        </div>
    )
} 