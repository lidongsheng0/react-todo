import React from 'react'
import AppContextProvider from './Context'
import Todo from './Todo'

export default function App() {
    return (
        <AppContextProvider>
            <Todo />
        </AppContextProvider>
    )
}
