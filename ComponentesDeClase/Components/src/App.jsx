//esctructura o anatomia de una class component
import { Component } from "react"

class Button extends Component{
  constructor(props){
    super(props)
    console.log("Ejecutando constructos", props);
  }

  componentDidMount(){
    console.log("Consultando API");
  }

  componentDidUpdate(prevProps, prevState){
    console.log("Ejecutando comando componentDiUpdate", prevProps, prevState);
  }

  componentWillUnmount(){
    console.log("ejecuanto componentWillUnmount del Button",this.props,this.state)
  }

  render(){
    console.log("ejecutando renderizado desde el componente Button");
    return(
      <button>Boton Componente</button>
    )
  }
}

class Example extends Component{
  render(){
    return(
      <h1>Clase example para agregar</h1>
    )
  }
}

class App extends Component{
  componentDidMount(){
    console.log("ComponentDiMount de App");
  }
  state = { valor_aumento:0, valor_disminuir:0 }
  render(){
    console.log(this.state);
    return(
      <div>
        <h1>Hola React</h1>
        <button onClick={()=> this.setState({ valor_aumento:this.state.valor_aumento+1 }) }>Aumentar</button>
        <button onClick={()=> this.setState({ valor_disminuir:this.state.valor_disminuir-1 }) }>Disminuir</button>
        <h1>
          {("Aumento: " + this.state.valor_aumento)}
        </h1>
        <h1>
        {("Aumento: " + this.state.valor_disminuir)}
        </h1>
        <Button></Button>
        <Example></Example>
        { this.state.valor_aumento === 1
        ?<Button/>
        : null }
      </div>
    )
  }  
}

export default App
