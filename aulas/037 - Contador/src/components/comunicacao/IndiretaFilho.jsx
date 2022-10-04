import React from "react";

const IndiretaFilho = (props) => {
    /**
     * Para fornecer informações do filho para o pai
     * pode ser usada uma função de callback
     */
    const { onClicar } = props;
    const gerarIdade = () => {
        return Math.round((Math.random() * (20)) + 50)
    }

    return (
        <div>
            <div>Filho</div>
            <button onClick={ () => onClicar('Leonardo', gerarIdade(), true)}>Fornecer Dados</button>
        </div>
    )
}

export default IndiretaFilho;