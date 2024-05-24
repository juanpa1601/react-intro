import { useState } from "react"
//import './Counter.css'
import styled from '@emotion/styled'
import MyButton from "./MyButton";


const Counter = () => {
    const [count, setCount] = useState(0);
    
    const Title = styled.h1`
        font-family: 'Reboto', sans-serif;
        font-size: 2rem;
        color: #981;
        text-decoration: underline;
    `
    const Number = styled.span`
        color: #f00;
        text-decoration: none;
    `


    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleReset = () => {
        setCount(0)
    }
    const handleSubstract = () => {
        setCount(count - 1)
    }
    return (
    <>
        <Title>Count:
            <Number>{count}</Number>
        </Title>
        <hr />
        <MyButton funcion={handleAdd}>+</MyButton>
        <MyButton funcion={handleReset}>reset</MyButton>
        <MyButton funcion={handleSubstract}>-</MyButton>
    </>
  )
}

export default Counter