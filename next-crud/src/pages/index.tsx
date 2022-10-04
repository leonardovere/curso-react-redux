import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const { adicionarCliente, cliente, clientes, listarTodos, removerCliente, salvarCliente, selecionarCliente, listando, renderizarTabela } = useClientes();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {listando
          ? (
            <>
              <div className="flex justify-end">
                <Botao className="mb-4" cor="green" onClick={adicionarCliente}>Novo cliente</Botao>
              </div>

              <Tabela
                clientes={clientes}
                clienteSelecionado={selecionarCliente}
                clienteExcluido={removerCliente}
              />
            </>
          )
          : (
            <Formulario
              cliente={cliente}
              onChange={salvarCliente}
              onCancel={() => renderizarTabela()}
            />
          )
        }
      </Layout>
    </div>
  )
}
