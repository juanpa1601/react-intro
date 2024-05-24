import MyFirstFC from "./components/MyFirstFC"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main"

function App() {
  
  return (
    <>
      <h1>Hello, world!</h1>
      <MyFirstFC miTexto={'Estoy mandado un hello world en duro!!!'}/>
      <Header titulo={'Estoy mandando el titulo'}/>
      <Footer />
      <Main />      
    </>
  )
}

export default App
