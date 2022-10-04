import React from "react";

const ParOuImpar = (props) => {
    const { numero } = props;

    const isPar = () => {
        return numero % 2 === 0;
    }

    return (
        <div>
            {numero} é <strong>{isPar() ? <span>Par</span> : <span>Ímpar</span>}</strong>
        </div>
    )
}

export default ParOuImpar;