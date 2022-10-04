import React from "react";

export default function Fragmento(props) {
    /**
     * O react nessita que seja passada uma ou mais tags
     * englobadas por outra como por exemplo uma <div></div>
     * 
     * Para retornar somente as propriedas setadas
     * pode ser utilizado o <React.Fragment> ou <>.
     */
    return (
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro !!</p>
        </>
    );
}