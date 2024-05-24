import useToggle from './hooks/useToggle'
import useCount from './hooks/useCount';
import './App.css'
import { Button } from '../Components/Button';


function App() {

  const [active,handleToggle,handleActive,handleInactive] = useToggle();
  const [count, handleAdd, handleRestart, handleReduce] = useCount();

  return (
    <>
      <div>
        <button onClick={handleActive}>
          Active
        </button>
        <button onClick={handleToggle}>
          Toggle
        </button>
        <button onClick={handleInactive}>
          Inactive
        </button>
        <p>
          { active ? 'Active' : 'Inactive' }
        </p>
      </div>
      <div>
        <h1>count</h1>
        <p>{count}</p>
        <Button name='Add' onClick={handleAdd}/>
        <Button name='Restart' onClick={handleRestart}/>
        <Button name='Reduce' onClick={handleReduce}/>
      </div>
      <div>
      <button onClick={()=>addTodo({title:"a new todo"})}>
        Add Task
      </button>
      <ul>
        {todos.map( todo => (
          <li key={todo.id}>
            {todo.title}
            <button onClick={() => deleteTodos (todo.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default App
