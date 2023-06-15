
import NavBar from './components/NavBar'
import SobreMi from './components/SobreMi'
import Educacion from './components/Educacion'
import Tecnologias from './components/Tecnologias'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Diseño from './components/Diseño'

import { useState } from 'react'


function App() {

  const [language, setLanguage]=useState('');

  return (
    <>
      <NavBar language={language} setLanguage={setLanguage}/>
      <SobreMi language={language}/>
      <Educacion/>
      <Tecnologias/>
      <Proyectos/>
      <Contacto/>
    </>
  )
}

export default App
