import { useState } from 'react'
import './App.css'
//Customs-Hooks
import useToggle from './hooks/useToggle'
import useCount from './hooks/useCount';
//Componentes
import Button from '../Components/general/Button.jsx'
import TodoApp from '../Components/todoApp/TodoApp.jsx'

function App() {
  
  const [active,handleToggle,handleActive,handleInactive] = useToggle(false);
  const [count, handleAdd, handleRestart, handleReduce] = useCount(0);


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
        <Button name='Add' funcion={handleAdd}/>
        <Button name='Restart' funcion={handleRestart}/>
        <Button name='Reduce' funcion={handleReduce}/>
      </div>
      
      <div>
      <TodoApp />
      </div>
    </>
  )
}

export default App
