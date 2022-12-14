import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/UseCounter'
import { useFetch } from '../../hooks/UseFetch'

const UseRef = (props) => {
    const [count, inc, dec] = useCounter();
    const response = useFetch('http://files.cod3r.com.br/curso-react/estados.json', 'GET'); 

    const showStates = (states) => {
        return states.map((state, index) => <li key={index}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                
                <div>
                    <button className="btn" onClick={() => inc()}>+1</button>
                    <button className="btn" onClick={() => dec()}>-1</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <ul>
                    { !response.loading ? showStates(response.data) : <li>Carregando...</li> }
                </ul>
            </div>
        </div>
    )
}

export default UseRef
