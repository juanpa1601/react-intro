import styled from "@emotion/styled"

const Button = styled.button`
background-color: #174;
border: 2px solid #8888fb;
border-radius: 10px;
color: #fff;
cursor: pointer;
`

const MyButton = ({funcion, children }) => {
  
  return (
    <Button onClick={funcion}>
        {children}
    </Button>
  )
}

export default MyButton