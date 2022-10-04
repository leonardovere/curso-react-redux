import React from "react";

const Botoes = (props) => {
    const { incrementar, decrementar, children } = props;

    return (
        <div className="container-botoes">
            <button onClick={incrementar}>+</button>
            { children }
            <button onClick={decrementar}>-</button>
        </div>
    )
}

export default Botoes;