import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = (props) => {
    /**
     * useState -> Permite controlar o estado da aplicação
     * ele tem como retorno um array, onde o primeiro elemento é o valor em si
     * e o segundo uma função de callback utilizada para modificar o valor.
     */
    const [exibir, setExibir] = useState('Pai');

    const fornecerInformacoes = (nome, idade, nerd) => {
        console.log({ nome, idade, nerd });
        setExibir(`Filho ${nome}, com ${idade} anos, ${ nerd ? 'É nerd' : 'Não é nerd' }`);
    }

    return (
        <div>
            <div>{ exibir }</div>
            <IndiretaFilho onClicar={fornecerInformacoes} />
        </div>
    )
}

export default IndiretaPai;