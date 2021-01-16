import React from 'react'

function ListItem({text,completed,onRemove,onToggle,id}) {
    return (
        <li style={completed ? {textDecoration: 'line-through'} : {}}>
            <input type="checkbox" onClick={()=>onToggle(id)}/>
            <label>{text}</label>
            <button onClick={()=>onRemove(id)}>删除</button>
        </li>
    )
}

export default ListItem
