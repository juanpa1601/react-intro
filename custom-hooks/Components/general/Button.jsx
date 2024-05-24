import React from 'react'

const Button = ({ name, funcion }) => {
  return (
    <>
      <button onClick={ funcion }>
        { name }
      </button>
    </>
  )
}

export default Button