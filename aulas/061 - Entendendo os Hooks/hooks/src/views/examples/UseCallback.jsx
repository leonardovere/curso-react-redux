import React, { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from './UseCallbackButtons';

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    /**
     * como o count sempre será atualizado, o parâmetro passado, que não se modifica
     * é o set
     */
    const increment = useCallback(
        (valor) => setCount(current => current + valor), [setCount],
    );

    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{count}</span>

                <UseCallbackButtons increment={increment} />
            </div>
        </div>
    )
}

export default UseCallback
