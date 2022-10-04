import React from "react";

// Todos os parâmetros passados pelo componente
// são armazenado em um objeto 
export default function ComPropriedade(props) {
    // Propriedas são somente para leitura
    const status = props.nota >= 7 ? 'Aprovado' : 'Em Recuperação';

    return (
        <div>
            <h3>{ props.titulo }</h3>
            <p>
                <strong> { props.aluno } </strong> 
                tem nota 
                <strong> { props.nota } </strong>
                - Está 
                <strong> {status} </strong>
            </p>
        </div>
    );
}