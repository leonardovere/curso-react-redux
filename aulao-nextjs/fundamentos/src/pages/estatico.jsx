import Layout from '../components/Layout'

const Estatico = (props) => {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.numero}</div>
        </Layout>
    )
}

/**
 * Através do método é possível armazenar valores padrão, para que não precise sempre gerar novamente o conteúdo
 * 
 * SSG 
 */
export function getStaticProps() {
    return {
        props: {
            numero: Math.round(Math.random() * 1000)
        }
    }
}

export default Estatico