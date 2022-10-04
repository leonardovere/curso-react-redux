import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calc(n) {
    if (n < 0) return -1
    if (n === 0) return 1
    return calc(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [status, setStatus] = useState("");

    /**
     * Quando os parâmetros passados no array, tiverem uma alteração
     * irá disparar a função de callback passada
     */
    useEffect(() => {
        setFatorial(calc(number));
    }, [number])

    useEffect(() => {
        if (fatorial > 1000000) {
            document.title = "Eita !!"
        } else {
            document.title = "React App"
        }
    }, [number])

    useEffect(() => {
        if (number === 0) {
            setStatus("Incalculável");
        } else {
            setStatus(number % 2 === 0 ? 'Par' : 'Ímpar');
        }
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial}</span>
                </div>

                <input type="number" className="input" value={number} min={0} onChange={e => setNumber(parseInt(e.target.value))} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <span className="text">Status: </span>
                <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
