import { useState } from 'react';

export default function useRenderizacao() {
    const [listando, setListando] = useState(true);

    const renderizarTabela = () => setListando(true)
    const renderizarForm = () => setListando(false)

    return {
        listando,
        renderizarTabela,
        renderizarForm
    }
}