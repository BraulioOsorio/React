
import React, { useContext } from 'react'
import Contexto from './contexto/Context'

function Ubicacion() {
    const {alumno} = useContext(Contexto)
    const idioma = alumno[3].idioma
  return (
    <div className='ubicacion'>
        <h1>Ubicacion</h1>
        <div className='texto'>
        {alumno[idioma].direccion}
        </div>
    </div>
  )
}

export default Ubicacion