import React from "react";
import './Botao.css';

const Botao = (props) => {
    const { valor, onClick } = props;
    let { classes } = props;

    if (classes) {
        classes.push('botao');
    } else {
        classes = ['botao'];
    }

    return (
        <button className={classes.join(' ')} onClick={() => onClick(valor)}>{valor}</button>
    )
}

export default Botao;