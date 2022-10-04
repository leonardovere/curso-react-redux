import { useRouter } from 'next/router'
import Layout from '../../../components/Layout'

const ClientePorCodigo = () => {
    // Para poder acessar atributos da url
    const router = useRouter()
    const { codigo, filial } = router.query;

    return (
        <Layout titulo="Navegação dinâmica">
            <div>Código = {codigo}</div>
            <div>Filial = {filial}</div>
        </Layout>
    )
}

export default ClientePorCodigo