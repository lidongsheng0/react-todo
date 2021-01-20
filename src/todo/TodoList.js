import React from 'react'
import {useGlobalContext} from './Context'
import ListItem from './ListItem'

export default function TodoList() {
    const {todoList} = useGlobalContext();

    return (
        <div className='todo-list'>
            {
                todoList.length > 0 && todoList.map(todo => (
                    <ListItem key={todo.id} {...todo} />
                ))
            }
        </div>
    )
}
