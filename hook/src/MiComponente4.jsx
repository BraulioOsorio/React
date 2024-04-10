import React from 'react'
import { useState } from 'react';

function MiComponente({rey}) {
  const [vota,setVota] = useState(0);
  const sumar = () =>{
    setVota(vota+1);
  }


  return (
    <div className='rey'>
      <p>{rey.nombre}</p>
      <h1 onClick={sumar} value={vota}>{vota}</h1>
      </div>
  )
}


export default MiComponente