import React from "react";
import alunos from "../../data/alunos";

const ListaAlunos = (_) => {
    const lista = alunos.map(aluno => {
        // Key -> Idenfificador único de cada elemento
        return (
            <li key={aluno.id}>{aluno.id}) {aluno.nome} {' -> '} {aluno.nota}</li>
        )
    });

    return (
        <div>
            <ul>
                {lista}
            </ul>
        </div>
    )
}

export default ListaAlunos;