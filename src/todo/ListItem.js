import React from 'react'
import {useGlobalContext} from './Context'
import { MdDelete,MdModeEdit,MdStar } from "react-icons/md";

export default function ListItem({id,text,collection}) {
    const {collectionTodo,deleTeTodo,editTodo} = useGlobalContext();

    const handleCollection = ()=> {
        collectionTodo(id);
    }

    const handleDelete = ()=> {
        deleTeTodo(id);
    }

    const handleEdit = ()=> {
        editTodo(id);
    }
    return (
        <div className='item'>
            <p>{text}</p>
            <div className='item-toolbar'>
                <button onClick={handleCollection} style={collection ? {color: 'green'} : {}}>
                    <MdStar />
                </button>
                <button onClick={handleEdit}>
                    <MdModeEdit />
                </button>
                <button onClick={handleDelete}>
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}
