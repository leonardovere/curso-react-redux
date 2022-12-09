import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

import { alterarNumeroMaximo, alterarNumeroMinimo } from '../store/actions/numeros';

const Intervalo = (props) => {
    const { min, max, onChangeMin, onChangeMax } = props;

    return (
        <div className='Intervalo'>
            <span>
                <label htmlFor='min'>Mínimo:</label>
                <input type="number" name="min" id="min" value={min} onChange={ev => onChangeMin(parseInt(ev.target.value))} />
            </span>

            <span>
                <label htmlFor='max'>Máximo:</label>
                <input type="number" name="max" id="max" value={max} onChange={ev => onChangeMax(parseInt(ev.target.value))} />
            </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { ...state.numeros }
}

/**
 * Assim como é utilizado o mapeamento do estado para acessar os atributos
 * é necessário utilizar o mapeamento das action que irão refletir as mudanças 
 * de estado para todos os componentes associados.
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onChangeMin: (novo) => {
            // Retorna a action
            const action = alterarNumeroMinimo(novo)

            // Dispara a modificação para os reducers
            dispatch(action)
        },
        onChangeMax: (novo) => dispatch(alterarNumeroMaximo(novo))

    }
}

export default connect(
    // Retorna o mapeamento do estado
    mapStateToProps,
    // Retorna o mapeamento das ações
    mapDispatchToProps
)(Intervalo);