import React,{useState} from 'react'
import {useGlobalContext} from './Context'
import {v4 as uuidV4} from 'uuid';

export default function AddTodo() {
    const {setTodoList,inputValue,setInputValue,editId,setEditId} = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim()) {
            if(editId) {
                setTodoList(todoList => todoList.map(todo => {
                    if(todo.id === editId) {
                        return {
                            ...todo,
                            text: inputValue
                        }
                    }
                    return todo;
                }))

                setEditId(null);
            }else {
                const todo = {
                    text: inputValue,
                    id: uuidV4(),
                    collection: false,
                }
        
                setTodoList(todoList => todoList.concat(todo));
            }
        }

        setInputValue('');
    }
    
    return (
        <form onSubmit={handleSubmit} className='add'>

            <label htmlFor='text' className='label'>请输入事项：</label>
            <input value={inputValue} onChange={(e)=> setInputValue(e.target.value)} name='text' id='text' className='input'/>
            <button type='submit' className='btn'>提交</button>
        </form>
    )
}
