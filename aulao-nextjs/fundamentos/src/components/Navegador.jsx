import Link from "next/link"
import React from "react"
import styles from "../styles/Navegador.module.css"

const Navegador = (props) => {
    const { destino, texto, cor } = props;

    return (
        <Link href={destino}>
            <div className={styles.navegador} style={{
                backgroundColor: cor ?? '#ccc'
            }}>
                {texto}
            </div>
        </Link>
    )
}

export default Navegador