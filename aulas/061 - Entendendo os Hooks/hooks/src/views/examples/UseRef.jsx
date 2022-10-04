import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");
    /**
     * Sempre irá retornar a mesma referência
     */
    const count = useRef(0);

    /**
     * Pode ser usado para referenciar a um campo input
     * e assim ter sempre a referência dele
     */
    const input1Ref = useRef(null);
    const input2Ref = useRef(null);

    const mergeText = (text1, text2) => {
        [...text1] = text1;
        [...text2] = text2;
        const size = text1.length + text2.length;

        let texto = "";

        for (let i = 0; i < size; i++) {
            let el1 = text1[i] || '';
            let el2 = text2[i] || '';

            texto += `${el1}${el2}`
        }

        return texto;
    }

    useEffect(() => {
        count.current = count.current + 1;
        input2Ref.current.focus();
    }, [val1]);

    useEffect(() => {
        count.current++;
        input1Ref.current.focus();
    }, [val2]);

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01" />
            <div className="center">
                <div>
                    <span className="text">Valor:</span>
                    <span className="text">{val1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" className="input" ref={input1Ref} value={val1} onChange={e => setVal1(e.target.value)} />
            </div>

            <SectionTitle title="Exercício #02" />
            <div className="center">
                <div>
                    <span className="text">
                        [<span className="red">{mergeText(val1, val2)}</span>]
                    </span>
                </div>

                <input type="text" className="input" ref={input2Ref} value={val2} onChange={e => setVal2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
