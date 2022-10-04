import './Sorteio.css';
import React, { useState } from "react";
import If, { Else } from '../condicional/If';

const Sorteio = (props) => {
    const [sorteados, setSorteados] = useState([]);
    const [count, setCount] = useState(0);

    const onChange = (ev) => {
        let qtd = parseInt(ev.target.value);
        setCount(qtd);
        setSorteados(sortear());
    }

    const valorAleatorio = () => {
        return Math.round(Math.random() * (60 - 1) + 1);
    };

    const sortear = () => {
        let listaGerada = [];

        for (let i = 0; i < count; i++) {
            let gerado = valorAleatorio();

            while (listaGerada.includes(gerado)) {
                gerado = valorAleatorio();
            }

            listaGerada.push(gerado);
        }

        return listaGerada.sort((a, b) => a - b);
    }

    return (
        <div>
            <h2>Números sorteados</h2>

            <If cond={sorteados.length > 0}>
                <p style={{ textAlign: 'center' }}>
                    <strong>{sorteados.join(', ')}</strong>
                    </p>

                <Else>
                    <p>Clique para sortear os números !!</p>
                </Else>
            </If>

            <div className="container-campos-sorteio">
                <div>
                    <label htmlFor="inputQuantidade">Quantidade</label>
                    <input type="number" id="inputQuantidade" value={count} onChange={onChange} min={1} max={7} />
                </div>

                <div>
                    <button style={{ margin: 'auto' }} onClick={() => setSorteados(sortear())}>Sortear</button>
                </div>
            </div>
        </div>
    )
}

export default Sorteio;