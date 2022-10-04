import React from 'react';

// export -> Define que outras classes podem importar o conteudo
export default function Primeiro() {
    const msg = 'Seja bem vindo(a) !!';

    /**
     * Para identar código JSX, utiliza-se o ()
     */
    return (
        <div>
            <h2>Primeiro Componente</h2>
            <p>{ msg }</p>
        </div>
    );
}