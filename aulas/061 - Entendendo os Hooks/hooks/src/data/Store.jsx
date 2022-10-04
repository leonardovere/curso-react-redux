import React, { useState } from "react";

const initialState = {
    idade: 0,
    nome: 'Context API'
}

export const AppContext = React.createContext(null);

const Store = (props) => {
    const [state, setState] = useState(initialState);

    const updateState = (key, value) => {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        /**
         * O nível em que é colocado o Provider, que define que componentes filhos terão acesso ao context
         */
        <AppContext.Provider value={{
            idade: state.idade,
            nome: state.nome,
            setIdade: (n) => updateState('idade', n),
            setNome: (nome) => updateState('nome', nome),
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default Store;