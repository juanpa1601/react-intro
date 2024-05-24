import { useState } from 'react'

const useTodos = (initialState) => {
    const [todos, setTodos] = useState(initialState);

    const addTodos = (newTodo) => {
        newTodo.id = Date.now();

        setTodos([
            ...todos, 
            newTodo
        ])
    }

    const deleteTodos = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId)) 
    }
    
    

    return [todos, addTodos, deleteTodos]
}

export default useTodos