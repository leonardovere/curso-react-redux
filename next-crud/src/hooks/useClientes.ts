import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRespositorio";
import useRenderizacao from "./useRenderizacao";

export default function useClientes() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const { listando, renderizarForm, renderizarTabela } = useRenderizacao()
  const [cliente, setCliente] = useState(Cliente.vazio())
  const [clientes, setClientes] = useState([] as Cliente[])

  const listarTodos = () => {
    repo.listar().then(clientes => {
      setClientes(clientes)
      renderizarTabela()
    })
  }

  useEffect(listarTodos, [])

  const adicionarCliente = () => {
    setCliente(Cliente.vazio())
    renderizarForm()
  }

  const removerCliente = async (cliente: Cliente) => {
    await repo.excluir(cliente)
    listarTodos()
  }

  const selecionarCliente = (cliente: Cliente) => {
    renderizarForm()
    setCliente(cliente)
  }

  const salvarCliente = async (cliente: Cliente) => {
    await repo.salvar(cliente)
    listarTodos()
  }

  return {
    listarTodos,
    adicionarCliente,
    salvarCliente,
    removerCliente,
    selecionarCliente,
    cliente,
    clientes,
    listando,
    renderizarForm,
    renderizarTabela
  }
}