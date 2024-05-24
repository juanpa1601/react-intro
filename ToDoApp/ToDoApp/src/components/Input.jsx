import { useState } from "react"


const Input = () => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
           
        <input 
            className='task-input'
            type="text" 
            placeholder='Add task'
            value={inputValue}
            onChange={handleInputChange}
            onKeyUp={(event) => {
                if(event.key === 'Enter') {
                    if(inputValue !== ''){
                        addTask(event.target.value)
                        }
                    setInputValue('')
                    }
                }}
            />
  )
}

export default Input