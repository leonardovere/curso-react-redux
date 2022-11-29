import './Intervalo.css';
import React from 'react';
import { connect } from 'react-redux';

const Intervalo = (props) => {
    const { min, max } = props;

    return (
        <div className='Intervalo'>
            <span>
                <label htmlFor='min'>Mínimo:</label>
                <input type="number" name="min" id="min" value={min} readOnly />
            </span>

            <span>
                <label htmlFor='max'>Máximo:</label>
                <input type="number" name="max" id="max" value={max} readOnly />
            </span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state.numeros
    }
}

export default connect(mapStateToProps)(Intervalo);