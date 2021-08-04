import { createStore } from 'redux';

const initialState = {
    resultado: [],
    qtd:0
};

const dataRequest = (state = initialState, action) => {       
    switch (action.type) {
        case 'SEARCH':
            return {                
                resultado:action.resultado,
                qtd:action.qtd
            };
        case 'CLEAN':
            return {                
                resultado:[],
                qtd:0
            };
        default:
            return state;
    }
};

const store = createStore(dataRequest)

export default store;