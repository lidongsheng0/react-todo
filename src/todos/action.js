import { act } from 'react-dom/test-utils';
import * as actionTypes from './actionType';

let nextId = 0;

export const addTodo = (text) => ({
    type: actionTypes.ADDTODO,
    text: text,
    id: nextId++,
    completed: false
})

export const toggleTodo = (id) => ({
    type: actionTypes.TOGGLETODO,
    id: id
})

export const removeTodo = (id) => ({
    type: actionTypes.REMOVETODO,
    id: id
})