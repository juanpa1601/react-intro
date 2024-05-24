import { useState } from 'react'
import { VscChromeClose, VscChromeMinimize, VscAdd, VscTerminalLinux } from "react-icons/vsc";


function App() {
  const [result, setResult] = useState(0)
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  
  const sumar = () => {
    const add = parseInt(num1) + parseInt(num2)
    setResult(add)
  }

  const restar = () => {
    const rest = parseInt(num1) - parseInt(num2)
    setResult(rest)
  }

  const dividir = () => {
    const div = parseFloat(num1) / parseFloat(num2)
    setResult(div)
  }

  const multiplicar = () => {
    const mult = parseInt(num1) * parseInt(num2)
    setResult(mult)

  }

  return (
    <div>
      <h1 
        className="font-serif text-4xl italic	underline decoration-red-900 decoration-wavy"
      >
        Resultado = {result}
      </h1>
      <input
        className="rounded-lg border border-solid border-slate-900 border-2	"
        type='number'
        onChange={ (evento)=>setNum1(evento.target.value) }
      />
        <input
        className="rounded-lg border border-dashed border-slate-900 border-2"
        type='number'
        onChange={ (evento)=>setNum2(evento.target.value) }
      />
      <button 
        className="rounded-full border border-dotted border-green-700 border-4"
        onClick={()=>sumar()}>
          <VscAdd />   
      </button>
      <button 
      className="rounded-full border border-double border-indigo-900 border-4"
        onClick={()=>restar()}>
          <VscChromeMinimize />
      </button>
      <button 
        className="rounded-full border border-dotted border-purple-600 border-4"
        onClick={()=>multiplicar()}>
          <VscChromeClose />
      </button>
      <button 
        className="rounded-full border border-double border-rose-800 border-4"
        onClick={()=>dividir()}>
          <VscTerminalLinux />
          
      </button>
    </div>
  )
}

export default App
