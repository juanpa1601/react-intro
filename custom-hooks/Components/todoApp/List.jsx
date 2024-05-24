import Button from '../general/Button'

const List = ({todos, deleteTodos}) => {
    console.log(todos)

    const getTodos = () => {
        return todos.filter(todo => todo.title)
    }

    return (
        <>
            <ul>
                {getTodos().map((todo) => {
                    <li key={todo.id}>
                        <span>
                        {todo.title}
                        </span>
                        <Button name='Delete' funcion={deleteTodos} />
                    </li>
                })}
            </ul>
        </>
    )
}

export default List