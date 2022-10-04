import React, { useState } from "react";
import './Input.css';

const Input = (props) => {
    const [valor, setValor] = useState('teste');

    /**
     * Para alterar o valor de um campo input aonde o valor
     * inserido seja refletido tanto no controlador, quanto na tela
     * precisa usar um dos eventos do campo, como exemplo onChange, onClick ...
     */

    const alterarValor = (ev) => {
        console.log({ novo: ev.target.value });
        setValor(ev.target.value);
    }

    return (
        <div>
            { /** 
             * Se um campo for utilizado somente para exibir um valor
             * deve-se utilizar a notação -> readOnly 
             * --------------------------------
             * 
             * Se não preferir controlar um determinado campo, é necessário
             * passar como value o valor -> undefined
             * */  }
            <input value={valor} onChange={alterarValor} />
            <span>{ (valor || valor.length > 0) ? valor : `"${'Sem valor definido'}"` }</span>
        </div>
    )
}

export default Input;