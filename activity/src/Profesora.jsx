import React, { useContext } from 'react'
import Contexto from './contexto/Context'

function Profesora() {
    const {alumno} = useContext(Contexto)
    const idioma = alumno[3].idioma
    const imagenes = `../imagenes/${alumno[idioma].foto}.jpeg `
  return (
    <div className='profesora'>
        <h1>{alumno[idioma].boton1}:</h1>
        <div className='foto'>
            <img className='imagen' src={imagenes} alt="" />

        </div>
        <div className='nombre'>{alumno[idioma].nombre}</div>
    </div>
  )
}

export default Profesora