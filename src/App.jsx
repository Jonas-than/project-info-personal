import { useState } from 'react'

import './App.css'

function App() {
  
  const datos = 
    {
      nombre: 'Jonathan Steven Litardo Chamba',
      telefono: '+523309145467',
      direccion: 'Guadalajara, Jalisco'
    }

  return (
    <>
      <h1>Informacion Personal</h1>
      <span>Nombre:{datos.nombre}</span>
      <br/>
      <span>Telefono:{datos.telefono}</span>
      <br/>
      <span>Direccion:{datos.direccion}</span>
    </>
  )
}

export default App
