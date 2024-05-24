import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    setCount(count +1)
  }
  return (
    <div>
      <h1 className="text-8x1">{count}</h1>
      <button
        className="border border-gray-700 bg-gray-400 rounded-md px-4 py-2 text-gray-80"
        onClick={ ()=>handleAdd() }
      >
        +
      </button>
    </div>
  )
}

export default App
