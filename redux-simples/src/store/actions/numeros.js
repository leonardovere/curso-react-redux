import { NUM_MAX_ALTERADO, NUM_MIN_ALTERADO } from "./actionTypes"

// Action Creator
function alterarNumeroMinimo(novo) {
    return {
        // O parâmetro obrigatório de todo action creator
        // Diz qual é a ação que será realizada
        type: NUM_MIN_ALTERADO,
        // Via de regra o parâmetro que representa o novo valor
        // é chamadado de payload
        payload: novo
    }
}

function alterarNumeroMaximo(novo) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novo
    }
}

export {
    alterarNumeroMinimo,
    alterarNumeroMaximo
}