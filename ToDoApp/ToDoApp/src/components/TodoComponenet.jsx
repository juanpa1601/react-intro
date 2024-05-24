import { useState } from "react"
import { BiTrash } from "react-icons/bi";

const TodoComponenet = () => {
    
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')
    const [visible, setVisible] = useState(true)
  
    const addTask = (task) => {
        setTasks([...tasks, {
            id: Math.random().toString(36).substring(7),
            text: task,
            completed: false,
        }])
    }

    const removeTask = (task) => {
        setTasks(tasks.filter((auxTask) => auxTask !== task ))
    }

    const markTaskCompleted = (task) =>{
        task.completed = true;
        setTasks(tasks.map((auxTask) => 
        auxTask.id === task.id 
        ? task 
        : auxTask))
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const getCompletedTask = () => {
        //return tasks.filter((task) => task.completed === true)
        return tasks.filter(task => task.completed)
    }

    const  getPendingTasks = () => {
        //return tasks.filter((task) => task.completed === false)
        return tasks.filter(task => !task.completed)
    }

    return (
        <div className="border border-pink-900">
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
            <div className='flex justify-center gap-8'>
                <div className='
                                border 
                                border-slate-300 
                                p-9 shadow-2xl
                                rounded'>
                    <h2>Completed Task</h2>
                    <ul>
                        {getCompletedTask().map((task) => (
                            <li
                            className='flex justify-between mb-1' 
                            key={task.id}>
                                 <input 
                                        type='checkbox'
                                        checked={task.completed}
                                        onChange={ ()=> markTaskCompleted(task) }
                                    />
                                <span style={ task.completed 
                                        ? {textDecoration:"line-through"} 
                                        : {textDecoration:"none"} }>
                                {task.text}
                                </span>
                                <button
                                        className='bg-red-500 hover:bg-red-700 text-white 
                                        font-bold py-1 px-2 ms-2 rounded-md'
                                        onClick={ () => removeTask(task) }
                                >
                                <BiTrash/>
                                </button>
                            </li>
                        ))}
                    </ul>
                <button 
                    className='px-2 rounded bg-blue-500 hover:bg-blue-700 text-white'
                    onClick={() => setVisible(!visible)}>
                    {visible ? "ocultar" : "Ver"}
                </button>
                </div>
                <div className='border 
                                border-slate-300 
                                p-9 
                                shadow-2xl 
                                rounded'>
                    <h2>Pending Tasks</h2>
                    <ul>
                        {getPendingTasks().map((task) => (
                            <li key={task.id}>
                                <input 
                                        type='checkbox'
                                        checked={task.completed}
                                        onChange={ ()=> markTaskCompleted(task) }
                                    />
                                <span style={ task.completed 
                                        ? {textDecoration:"line-through"} 
                                        : {textDecoration:"none"} }>
                                {task.text}
                                </span>
                                <button
                                        className='bg-red-500 hover:bg-red-700 text-white 
                                        font-bold py-1 px-2 ms-2 rounded-md'
                                        onClick={ () => removeTask(task) }
                                >
                                <BiTrash/>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button 
                    className='px-2 rounded bg-blue-500 hover:bg-blue-700 text-white'
                    onClick={() => setVisible(!visible)}>
                    {visible ? "ocultar" : "ver"}
                </button>
            </div>
         {/* <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input 
                            type='checkbox'
                            checked={task.completed}
                            onChange={ ()=> markTaskCompleted(task) }
                        />
                        <span style={ task.completed 
                                        ? {textDecoration:"line-through"} 
                                        : {textDecoration:"none"} }>
                            {task.text}
                        </span>
                        <button
                            className=''
                            onClick={ () => removeTask(task) }
                        >
                            <BiTrash/>
                        </button>
                    </li>
                ))}
            </ul>  */}
        </div>
  )
}

export default TodoComponenet