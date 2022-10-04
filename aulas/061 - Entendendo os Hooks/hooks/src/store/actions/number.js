export function numberAdd2(dispatch) {
    dispatch({type: 'numberAdd2'});
}

export function numberMultiply7(dispatch) {
    dispatch({type: 'numberMultiply7'});
}

export function numberDivide25(dispatch) {
    dispatch({type: 'numberDivide25'});
}

export function numberToInt(dispatch) {
    dispatch({type: 'numberToInt'});
}

export function numberAddN(dispatch) {
    dispatch({type: 'numberAddN', payload: Math.round(Math.random() * 100)});
}