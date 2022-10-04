import React from 'react';

export const data = {
    idade: 23,
    nome: 'Leonardo'
}

/**
 * Prepara um contexto para um determinado dado que pode ser acessado dentro da aplicação
 */
const DataContext = React.createContext(data)

export default DataContext