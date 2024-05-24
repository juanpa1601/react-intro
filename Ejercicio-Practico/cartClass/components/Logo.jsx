import { Component } from 'react'

const styles = {
    logo: {
        fontWight: '100',
        fontSize: '1rem',
    },
    img: {
        width:'8%'
    }
}

class Logo extends Component {
  render() {
    const {logo} = this.props
    return (
        
      <div>
        <img src={logo} style={styles.img}/>
        <p style={styles.logo}>E-Commerce</p>
      </div>
    )
  }
}

export default Logo