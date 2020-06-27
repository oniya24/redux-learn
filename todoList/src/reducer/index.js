import { createStore } from 'redux';

const reducer = (state = [],action)=>{
    switch(action.type){
        case 'addItem':
            return [ ...state, action.val];
        case 'deleteItem':
            state.splice(action.index,1);
            return state
        default:
            return state
    }
}

export const store = createStore(reducer);

