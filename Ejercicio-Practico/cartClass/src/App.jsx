import { Component } from 'react'
import Productos from '../components/Productos'
import Tittle from '../components/Tittle'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

class App extends Component {
  state = {
    productos : [
      { name:'Laptop', price:2500, img:'./laptop.png' },
      { name:'Phone', price:1500, img:'./phone.png' },
      { name:'Speaker', price:1000, img:'./speaker.png' },
    ],
    carro: [],
    esCarroVisible: false,
    logo:'./logo.png',
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(productAux => productAux.name === producto.name)){
      const newCarro = carro.map(carAux => carAux.name === producto.name
        ? ({
          ...carAux,
          cantidad: carAux.cantidad + 1
        }) 
        : carAux
      )
      return this.setState({ carro:newCarro })
    }
    return this.setState({
      carro:this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  disminuirCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(productAux => productAux.name === producto.name && productAux.cantidad > 1)){
      const newCarro = carro.map(carAux => carAux.name === producto.name
        ? ({
          ...carAux,
          cantidad: carAux.cantidad - 1
        })
        : carAux
        )
      return this.setState({ carro:newCarro })
    }
    const newCarro = carro.filter(carAux => carAux.name !== producto.name)
    this.setState({ carro:newCarro })
  }

  render() {
    const { esCarroVisible } = this.state
    return (
      <div>
        <Navbar 
          logo={this.state.logo}
          esCarroVisible={esCarroVisible}
          carro={this.state.carro}
          mostrarCarro={this.mostrarCarro}
          disminuirCarro={this.disminuirCarro}
        />
       <Layout>
          <Tittle/>
          <Productos 
            productos={this.state.productos} 
            agregarAlCarro={this.agregarAlCarro}
          />
       </Layout>
      </div>
    )
  }
}

export default App