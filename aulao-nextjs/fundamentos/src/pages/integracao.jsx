import React, { useState } from "react"
import Layout from '../components/Layout'

const Integracao = (props) => {
    const [id, setId] = useState(0);
    const [dados, setDados] = useState({});

    /* fetch(`http://localhost:3000/api/clientes/${Math.floor(Math.random() * 10)}`)
        .then(res => res.json())
        .then(dados => setDados(dados)) */

    const obterCliente = async () => {
        const dados = await fetch(`http://localhost:3000/api/clientes/${id}`)
            .then(res => res.json())
        setDados(dados)
    }

    return (
        <Layout titulo="Consumindo API do Next.js">
            <div>
                <input type="number" min={0} name="codigo" id="codigo" value={id} onChange={ev => setId(parseInt(ev.target.value))} required />
                <button onClick={obterCliente}>Obter cliente</button>
            </div>

            <ul>
                <li>ID: {dados.id ?? 'Não encontrado'}</li>
                <li>Nome: {dados.nome ?? 'Não encontrado'}</li>
            </ul>
        </Layout>
    )
}

export default Integracao