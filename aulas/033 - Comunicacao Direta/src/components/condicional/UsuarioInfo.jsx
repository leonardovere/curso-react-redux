import React from "react";
import If, { Else } from "./If";

const UsuarioInfo = (props) => {
    const { usuario } = props;

    return (
        <div>
            <If cond={usuario && usuario.nome}>
                Seja bem vindo(a) <strong>{usuario.nome}</strong> !!

                <Else>
                    Seja bem vindo(a) <strong>Anônimo</strong> !!
                </Else>
            </If>
        </div>
    )
}

export default UsuarioInfo;