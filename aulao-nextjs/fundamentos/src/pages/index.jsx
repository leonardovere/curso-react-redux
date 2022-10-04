import Link from "next/link"
import Navegador from "../components/Navegador"

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
        }}>
            <Navegador destino="/estiloso" texto="Estiloso" cor="lightgreen" />
            <Navegador destino="/exemplo" texto="Exemplo" />
            <Navegador destino="/jsx" texto="JSX" cor="lightblue" />
            {/* Para navegar até um componente, não necessita ser o arquivo solto com o nome destino, pode ser criada uma pasta com um arquivo index, que colocando o nome da pasta, também será acessado */}
            <Navegador destino="/navegacao" texto="Navegação #01" cor="gray" />
            {/* O arquivo que irá receber um parâmetro de url, deve ser envelopado por um par de []. Ex.: [codigo].jsx */}
            <Navegador destino="/cliente/pr/123" texto="Navegação #02" cor="yellow" />
            <Navegador destino="/estado" texto="Componente com estado" cor="#c758c0" />
            <Navegador destino="/integracao" texto="Integração com API #01" cor="#bd495f" />
            <Navegador destino="/estatico" texto="Conteúdo Estático" cor="#fa054a" />
        </div>
    )
}