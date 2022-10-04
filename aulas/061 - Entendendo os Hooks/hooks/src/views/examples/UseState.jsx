import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    /**
     * useState retorna um array com o valor atual e outro para alterar
     */
    const [x, setX] = useState(0);
    const [name, setName] = useState("Leonardo Roberto");

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{x}</span>
                <div>
                    <button className="btn" onClick={_ => setX(x - 1)}>-1</button>
                    <button className="btn" onClick={_ => setX(x + 1)}>+1</button>
                    {/* Função set do useState tem uma função interna que retorna sempre o valor atual -> Current */}
                    <button className="btn" onClick={_ => setX(c => c + 1000)}>1000</button>
                </div>
            </div>

            <SectionTitle title="Exercício #02" />
            {/* A interface só é atualizada quando ocorre uma mudança no estado co componente, e não o contrário */}
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default UseState
