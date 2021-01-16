import SETFILTER from './actionType';

export default (state="全部",action) => {
    switch(action.type) {
        case SETFILTER: 
            return action.filter;
        default:
            return state;
    }
}