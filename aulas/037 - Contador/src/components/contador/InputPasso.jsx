import React from "react";

const InputPasso = (props) => {
    const { pulo, setPulo, numero, setInicial } = props;

    return (
        <div className="container-campos">
            <div>
                <label htmlFor="inputPulo">Pulo</label>
                <input type="number" id="inputPulo" value={pulo} onChange={setPulo} />
            </div>

            <div>
                <label htmlFor="inputValorInicial">Número</label>
                <input type="number" id="inputValorInicial" value={numero} onChange={setInicial} />
            </div>
        </div>
    )
}

export default InputPasso;