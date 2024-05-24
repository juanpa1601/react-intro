import Input from './Input.jsx'
import List from './List.jsx'
import initialState from '../../datadb/db.js'
import useTodos from '../../src/hooks/useTodos.js'

const TodoApp = () => {

    const [todos, addTodo, deleteTodos] = useTodos(initialState);

  return (
    <>
        <Input addTodo={addTodo} todos={todos}/>
        <List todos={todos} deleteTodos={deleteTodos}/>
    </>
  )
}

export default TodoApp