import React from "react";
import { connect } from "react-redux";

const Media = (props) => {
    const { min, max } = props;

    return (
        <div>
            <span>
                <span>Resultado: </span>
                <strong>{(min + max) / 2}</strong>
            </span>
        </div>
    )
}

/**
 * Define uma relação de objetos que seão utilizados no componente
 * de acordo com os reducers
 */
 const mapStateToProps = (state) => {
    return { ...state.numeros }
}

/**
 * Todos os componentes que terão alteração no estado da aplicação
 * devem conter o método connect para refletir as mudanças
 */
export default connect(mapStateToProps)(Media);