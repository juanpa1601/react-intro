import { Component } from 'react'

const styles = {
    tittle: {
        marginBottom:'2rem',

    }
}

class Tittle extends Component {
  render() {
    return (
      <h1 style={styles.tittle}> Products List </h1>
    )
  }
}

export default Tittle