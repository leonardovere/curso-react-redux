import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store';
import { login, numberAdd2, numberAddN, numberDivide25, numberMultiply7, numberToInt } from '../../store/actions';

const UseReducer = (props) => {
    /**
     * Recebe a função que irá evoluir o estado, e o estado inicial
     */
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user
                    ? <span className="text">Olá {state.user.name}</span>
                    : <span className="text">Usuário não logado</span>
                }
                <span className="text">{state.number}</span>

                <div>
                    <button className="btn" onClick={_ => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={_ => numberAddN(dispatch)}>+?</button>
                    <button className="btn" onClick={_ => numberMultiply7(dispatch)}>*7</button>
                    <button className="btn" onClick={_ => numberDivide25(dispatch)}>/25</button>
                    <button className="btn" onClick={_ => numberToInt(dispatch)}>Valor inteiro</button>
                </div>

                <div>
                    <button className="btn" onClick={_ => login(dispatch, 'Leonardo Roberto')}>Logar</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
