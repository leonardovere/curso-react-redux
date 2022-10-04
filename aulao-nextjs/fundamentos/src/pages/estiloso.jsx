import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Estiloso.module.css'

const Estiloso = (props) => {
    return (
        <Layout titulo="Estiloso">
            {/* Forma para referenciar uma classe que está dentro de um css modularizado */}
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
            </div>
        </Layout>
    )
}

export default Estiloso