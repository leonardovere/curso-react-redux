import React from "react";
import { connect } from "react-redux";

const Sorteio = (props) => {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min)) + min;

    return (
        <div>
            <span>
                <span>Resultado: </span>
                <strong>{aleatorio}</strong>
            </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state.numeros }
}

export default connect(mapStateToProps)(Sorteio);