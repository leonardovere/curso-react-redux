import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

import DataContext from '../../data/DataContext'
import { AppContext } from '../../data/Store';

const UseContext = (props) => {
    /**
     * Retorna sempre o contexto atual
     */
    const context = useContext(DataContext);

    const setIdadeAleatoria = () => {
        const novaIdade = Math.round(Math.random() * 100);

        context.setState({
            // Retorna todos os atributos do objeto
            ...context.state,
            idade: novaIdade,
        });
    }

    const { idade, nome, setIdade, setNome } = useContext(AppContext);

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />

            <SectionTitle title="Exercício #01" />

            <div className="center">
                <span className="text">
                    <strong>Idade:</strong> {context.state.idade}
                </span>

                <span className="text">
                    <strong>Nome:</strong> {context.state.nome}
                </span>

                <button className="btn" onClick={_ => setIdadeAleatoria()}>Idade aleatória</button>
            </div>

            <SectionTitle title="Exercício #02" />

            <div className="center">
                <span className="text">
                    <strong>Idade:</strong> {idade}
                </span>

                <div>
                    <button className="btn" onClick={_ => setIdade(idade - 1)}>-1</button>
                    <button className="btn" onClick={_ => setIdade(idade + 1)}>+1</button>
                </div>

                <span className="text">
                    <strong>Nome:</strong> {nome}
                    <input type="text" className="input" value={nome} onChange={e => setNome(e.target.value)} />
                </span>
            </div>
        </div>
    )
}

export default UseContext
