import React from "react";

const Cabecalho = (props) => {
    // props é somente para leitura

    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}

export default Cabecalho;