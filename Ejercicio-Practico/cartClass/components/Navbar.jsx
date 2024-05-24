import { Component } from 'react'
import Carro from './Carro';
import Logo from './Logo';

const styles = {
    navbar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:'100px',
        justifyContent:'space-between',
        position:'relative',
        padding:'0 3rem',
        boxShadow:'0 2px 3px rgb(0,0,0,0.1)'
    }
}

class Navbar extends Component {
  render() {
    const { carro, esCarroVisible, mostrarCarro, logo, disminuirCarro } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo 
          logo={logo}
        />
        <Carro 
          carro={carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={mostrarCarro}
          disminuirCarro={disminuirCarro}
        />
      </nav>
    )
  }
}

export default Navbar