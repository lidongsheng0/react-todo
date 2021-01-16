import * as actionTypes from './actionType';

export default (state=[],action) => {
    switch(action.type) {
        case actionTypes.ADDTODO: {
            return [...state,{
                text: action.text,
                id: action.id,
                completed: false
            }]
        }
        case actionTypes.TOGGLETODO: {
            return state.map(item => {
                if(item.id===action.id){
                    return {...item,completed: !item.completed};
                } else {
                    return item;
                }
            })
        }
        case actionTypes.REMOVETODO: {
            return state.filter(item => item.id!==action.id);
        }
        default:
            return state;
    }
}