import React, { useContext } from 'react'
import Contexto from './contexto/Context'

function Idiomas() {
    const {alumno} = useContext(Contexto)
    const {setAlumno} = useContext(Contexto)

    const idioma1 = () =>{
        sustituto(0);
    }
    const idioma2 = () =>{
        sustituto(1);
    }
    const idioma3 = () =>{
        sustituto(2);
    }
    const sustituto=(posicion)=>{

        setAlumno(
            alumno.map((dato,index)=>
            index==3
            ? {...dato,idioma:posicion}
            : {...dato}
            )
        )
    }
  return (
    <div className='idiomas'>
        <div className='bandera' onClick={idioma1} value="0"><img src="../imagenes/spain.jpeg" alt="" /></div>
        <div className='bandera' onClick={idioma2} value="1"><img src="../imagenes/uk.png" alt="" /></div>
        <div className='bandera' onClick={idioma3} value="2"><img src="../imagenes/francia.png" alt="" /></div>
    </div>
  )
}

export default Idiomas