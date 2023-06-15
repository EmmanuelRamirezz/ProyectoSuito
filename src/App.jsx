
import NavBar from './components/NavBar'
import SobreMi from './components/SobreMi'
import Educacion from './components/Educacion'
import Tecnologias from './components/Tecnologias'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Diseño from './components/Diseño'
import { useState } from 'react'
import UserProvider from './context/UserProvider'


function App() {
  return (
    <UserProvider>
      <NavBar/>
      <SobreMi/>
      <Educacion />
      <Tecnologias />
      <Proyectos />
      <Contacto />
    </UserProvider>
  )
}

export default App
