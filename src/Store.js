import {createStore,combineReducers} from 'redux';
import {todosReducer} from './todos';
import {filterReducer} from './filter';

const reducers = combineReducers({
    todos: todosReducer,
    filter: filterReducer
})
export const store = createStore(reducers);