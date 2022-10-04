import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

const Exemplo = () => {
    return (
        <div>
            <Layout titulo="Exemplo">
                <Cabecalho titulo="Next.js & React" />
                <Cabecalho titulo="Aprenda react na prática" />
            </Layout>
        </div>
    )
}

export default Exemplo