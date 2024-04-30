import './App.css'
import Header from './Componentes/Header'
import Eventos from './Componentes/Eventos'
import Galeria from './Componentes/Galeria'
import Footer from './Componentes/Footer'

function App() {
  

  return (
  <>
  <Header/>
  <Eventos
  titulo={"nome do evento"}
  descricao={"descricao do evento"}
  horario={"29/04/2024 as 11h"}
  local={"senai são josé"}/>
  <Galeria/>
  <Footer/>
  </>
  )
}

export default App
