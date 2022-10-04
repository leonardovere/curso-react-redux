import React from "react";

const DiretaFilho = (props) => {
    const { texto, idade, bool } = props;

    return (
        <div>
            <span>{texto} </span>
            <span> <strong>{idade} anos</strong> </span>
            <span>{bool ? 'Verdadeiro' : 'Falso'}!</span>
        </div>
    )
}

export default DiretaFilho;