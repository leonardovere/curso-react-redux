import React from "react";
import { connect } from "react-redux";

const Soma = (props) => {
    const { min, max } = props;

    return (
        <div>
            <span>
                <span>Resultado: </span>
                <strong>{min + max}</strong>
            </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state.numeros }
}

export default connect(mapStateToProps)(Soma);