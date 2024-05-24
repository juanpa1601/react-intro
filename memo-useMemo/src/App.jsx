import { useState, useMemo } from "react"
import Display from "./components/Display"

const heavyTask = (iterations = 200) => {
  for(let i = 0; i < iterations; i++ ) {
    console.log("Contando...")
  }
  return `${iterations} cuentas realizadas`
}

function App() {
  const [count, setCount] = useState(2000)
  const [show, setShow] = useState(true)
  
  const memorizedValue = useMemo(() => heavyTask(count),[count])
 
  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Use Memo: <Display value={count}/> </h1>
      <hr />
      <h3>{memorizedValue}</h3>
      <button 
        className='btn btn-success'
        onClick={handleIncrease}
      >
        Increment
      </button>
      <button onClick={() =>setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  )
}

export default App
