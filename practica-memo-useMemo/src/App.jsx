import { useState } from 'react'
import './App.css'
import { BsFillArrowUpSquareFill, BsFillFileArrowDownFill } from "react-icons/bs";


function App() {
  const [count, setCount] = useState(0)

  const counterAdd = () =>{
    setCount(count + 1)
    console.log(count)
  }

  const counterDecrease = () => {
    setCount(count - 1)
    console.log(count)
  }
  return (
    <>
      <div className='rounded-lg border-4 border-violet-700'>
        <h1 className=''>Practica de memo y useMemo</h1>
        <p>Value Count: {count}</p>
        <hr />
        <button onClick={counterAdd}>
          Add Count
          <BsFillArrowUpSquareFill/>
        </button>
        <button onClick={counterDecrease} className=''>
          Decrease Count
          <BsFillFileArrowDownFill/>
        </button>
      </div>
    </>
  )
}

export default App
