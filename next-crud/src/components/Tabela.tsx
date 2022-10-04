import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "../components/Icones"

interface TabelaProps {
    clientes: Array<Cliente>;
    clienteSelecionado?: (cliente: Cliente) => void;
    clienteExcluido?: (cliente: Cliente) => void;
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

    const renderizarAcoes = (cliente: Cliente) => {
        const estilo = 'flex justify-center items-center rounded-full hover:bg-purple-50 p-2 m-1'

        return (
            <td className="flex justify-center items-center">
                {props.clienteSelecionado ? (
                    <button className={`${estilo} text-green-600`} onClick={() => props.clienteSelecionado?.(cliente)}>{IconeEdicao}</button>
                ) : false}
                {props.clienteExcluido ? (
                    <button className={`${estilo} text-red-600`} onClick={() => props.clienteExcluido?.(cliente)}>{IconeLixo}</button>
                ) : false}
            </td>
        )
    }

    const renderizarDados = () => {
        return props.clientes?.map((cliente, i) => {
            return (
                <tr key={i} className={i % 2 == 0 ? 'bg-purple-200' : 'bg-purple-100'}>
                    <td className="text-left p-4">{cliente.id}</td>
                    <td className="text-left p-4">{cliente.nome}</td>
                    <td className="text-left p-4">{cliente.idade}</td>
                    {renderizarAcoes(cliente)}
                </tr>
            )
        })
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`text-gray-100 bg-gradient-to-r from-purple-500 to-purple-800`}>
                <tr>
                    <th className="text-left p-4">Código</th>
                    <th className="text-left p-4">Nome</th>
                    <th className="text-left p-4">Idade</th>
                    {exibirAcoes ? (
                        <th className="text-center p-4">Ações</th>
                    ) : false}
                </tr>
            </thead>

            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}