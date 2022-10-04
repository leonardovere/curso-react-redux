import Link from "next/link";
import styles from "../styles/Layout.module.css"

const Layout = (props) => {
    const { children, titulo } = props

    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{titulo ?? 'Mais um exemplo'}</h1>

                <Link href="/">Voltar</Link>
            </div>

            <div className={styles.conteudo}>
                {children}
            </div>
        </div>
    )
}

export default Layout;