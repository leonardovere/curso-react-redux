import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
    numeros: (state, action) => {
        console.log(state, ' ', action)
        return {
            min: 7,
            max: 31
        }
    },
    nomes: (state, action) => { 
        console.log(state, ' ', action)
        return [
            'Leonardo',
            'Maria',
            'João'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig