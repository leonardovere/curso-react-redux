import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import CampoInput from "./CampoInput";

interface FormularioProps {
    cliente?: Cliente
    onChange?: (cliente: Cliente) => void
    onCancel?: Function
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id;
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {
                id
                    ? (
                        <CampoInput label="Código" leitura={true} valor={id} />
                    )
                    : false
            }
            <CampoInput label="Nome" valor={nome} onChange={(value) => setNome(value)} />
            <CampoInput label="Idade" tipo="number" valor={idade} onChange={(value) => setIdade(value)} />

            <div className="flex justify-end gap-2 mt-4">
                <Botao cor="blue" onClick={
                    () => props.onChange?.(
                        new Cliente(nome, idade, id)
                    )
                }>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao cor="red" onClick={props.onCancel}>Cancelar</Botao>
            </div>
        </div>
    )
}