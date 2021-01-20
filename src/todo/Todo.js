import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import Filter from './Filter'

export default function Todo() {
    return (
        <div className='container'>
            <h2 className='title'>事项</h2>
            <AddTodo />
            <Filter />
            <TodoList />            
        </div>
    )
}
