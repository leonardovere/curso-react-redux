import React from "react";
import DiretaFilho from "./DiretaFilho";

const DiretaPai = (props) => {
    return (
        <div>
            <DiretaFilho texto="Filho 1" idade={Math.round(Math.random() * 100)} bool={true} />
        </div >
    )
}

export default DiretaPai;