import { useState } from 'react'
import './App.css'


function App() {
  const [active, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!active);
  }

  const handleActive = () => {
    setActive(true);
  }

  const handleInactive = () => {
    setActive(false);
  }

  return (
    <>
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
    </>
  )
}

export default App
