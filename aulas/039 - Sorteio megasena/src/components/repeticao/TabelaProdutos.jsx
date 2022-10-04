import React from "react";
import produtos from "../../data/produtos";
import './TabelaProdutos.css';

export default function TabelaProdutos(props) {
    const linhas = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toLocaleString('pt-br', {
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    style: 'currency'
                })}</td>
            </tr>
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
            </thead>

            <tbody>
                {linhas}
            </tbody>
        </table>
    )
}