import React from "react";

const UseCallbackButtons = (props) => {
    const { increment } = props;

    console.log('render...');

    return (
        <div className="UseCallbackButtons">
            <button className="btn" onClick={_ => increment(6)}>+6</button>
            <button className="btn" onClick={_ => increment(8)}>+8</button>
            <button className="btn" onClick={_ => increment(12)}>+12</button>
        </div>
    )
}

/**
 * Cria um cache do componente para que não precise 
 * renderizar-lo múltiplas vezes
 */
export default React.memo(UseCallbackButtons);