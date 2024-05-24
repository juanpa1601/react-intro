import { useState } from "react"
import Display from "./components/Display"

function App() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  const handleIncrease = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>Use Memo: <Display value={count}/> </h1>
      <hr />
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
