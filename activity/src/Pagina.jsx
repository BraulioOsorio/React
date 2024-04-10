import React, { useContext, useState } from 'react'
import Profesora from "./Profesora"
import Ubicacion from "./Ubicacion"
import Contexto from './contexto/Context';

function Pagina() {
    const {alumno} = useContext(Contexto);
    const idioma = alumno[3].idioma;
    const [ocultar1,setoculata1] = useState(false);
    const [ocultar2,setoculata2] = useState(false);
    const mostrar1 = () => {
        setoculata1(!ocultar1)
        setoculata2(false)
    }
    const mostrar2 = () => {
        setoculata2(!ocultar2)
        setoculata1(false)
    }
  return (
    <>
        <h1>{alumno[idioma].titulo}</h1>
        <h2>{alumno[idioma].texto}</h2>
        <div className='botones'>
            <button onClick={mostrar1} >{alumno[idioma].boton1}</button>
            <button onClick={mostrar2} >{alumno[idioma].boton2}</button>
        </div>
        {ocultar1
         ? <Profesora/>
         : null
        }

        {ocultar2
         ? <Ubicacion/>
         : null
        }
        
    
    </>
    
  )
}

export default Pagina