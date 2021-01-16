import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../action'
import ListItem from './listItem'

export const TodoList = ({todos,onToggle,onRemove}) => {
    return (
        <div>
            <ul>
                {todos.map(item => (
                    <ListItem 
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        completed={item.completed}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        </div>
    )
}

function selectFilterTodos(todos,filter) {
    switch(filter) {
        case '已完成':
            return todos.filter(item => item.completed)
        case '未完成':
            return todos.filter(item => !item.completed)
        default:
            return todos;
    }
}

const mapStateToProps = (state) => ({
    todos: selectFilterTodos(state.todos,state.filter)
})

const mapDispatchToProps = (dispatch) => ({
    onToggle: (id) => dispatch(actions.toggleTodo(id)),
    onRemove: (id)  => dispatch(actions.removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
