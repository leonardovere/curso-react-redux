import numberReducer from "./number"
import userReducer from "./user";

/**
 * Através da ação passada é possível modificar atributos específicos de cada estado
*/
export default function reducer(state, action) {
    state = numberReducer(state, action);
    state = userReducer(state, action);

    return state;

    /* switch (action.type) {
        case 'numberAdd2':
            return { ...state, number: state.number + 2 }
        case 'login':
            return { ...state, user: { name: action.payload } }
        case 'numberMultiply7':
            return { ...state, number: state.number * 7 }
        case 'numberDivide25':
            return { ...state, number: state.number / 25 }
        case 'numberToInt':
            return { ...state, number: parseInt(state.number) }
        case 'numberAddN':
            return { ...state, number: state.number + action.payload }
        default:
            return state;
    } */
}