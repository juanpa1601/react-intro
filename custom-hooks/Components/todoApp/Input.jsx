import { useState } from "react"
import Button from '../general/Button'

const Input = ( {addTodo,todos} ) => {
    const [inputValue, setInputValue] = useState('')


    /* 
                        onKeyUp={(event) => {
                        if(event.key === 'Enter') {
                            if(inputValue !== ''){
                                funcion({title: event.target.value})
                            }
                        setInputValue('')
                        }
                    }}
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    */

    const handleButtonClick = () => {
        console.log(todos)
        console.log(inputValue)
        addTodo([...todos, inputValue])
        setInputValue('')
    };

    return (
        <>
            <div>
                <input 
                    type="text" 
                    placeholder='Add task'
                    value={inputValue}
                    onChange={(evento) => setInputValue(evento.target.value)}

                />
            </div>

            <div>
                <Button name="Agregar Tarea" funcion={handleButtonClick}/>
            </div>
        </>
  )
}

export default Input