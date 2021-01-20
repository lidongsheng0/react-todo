import React,{useState,useContext} from 'react'

const AppContext = React.createContext();

export default function Context({children}) {
    const [todoList, setTodoList] = useState([]);

    const [inputValue,setInputValue] = useState('');

    const [filter,setFilter] = useState('all');

    const [editId,setEditId] = useState(null);

    const filterTodoList = (todoList,filter) => {
        
        switch(filter) {
            case 'collection': {
                 return todoList.filter(todo => todo.collection);
            }
            case 'all': {
                 return todoList;
            }
            default: {
                return todoList.filter(todo => todo.text.indexOf(filter)!==-1);
            }
        }
    }

    const  collectionTodo = (id) => {
        setTodoList(todoList => {
            return todoList.map(todo => {
                if(todo.id===id) {
                    return {
                        ...todo,
                        collection: !todo.collection
                    };
                }
                return todo;
            })
        })
    }

    const editTodo = (id) => {
        setInputValue(todoList.filter(todo => todo.id===id)[0].text);
        setEditId(id);
    }

    const deleTeTodo = (id) => {
        setTodoList(todoList => {
            return todoList.filter(todo => todo.id!==id);
        })
    }
    return (
        <AppContext.Provider 
            value={{setTodoList,todoList:filterTodoList(todoList,filter),collectionTodo,deleTeTodo
            ,setFilter,inputValue,setInputValue,editTodo,editId,setEditId}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

