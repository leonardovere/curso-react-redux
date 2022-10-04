import { useState } from "react";
import Layout from "../components/Layout";

const Estado = (props) => {
    const [num, setNum] = useState(0);

    return (
        <Layout titulo="Componente com estado">
            <button onClick={() => setNum(current => current + 1)}>+</button>

            <span> {num} </span>

            <button onClick={() => setNum(current => current - 1)}>-</button>
        </Layout>
    )
}

export default Estado;