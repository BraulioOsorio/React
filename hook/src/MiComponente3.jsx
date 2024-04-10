import React from 'react'

function MiComponente({rey}) {
  const eliminar = (e) =>{
    e.target.parentNode.remove();

  }

  return (
    <div className='rey'>
      <p>{rey.nombre}</p>
      <button onClick={eliminar} className='btn btn-outline-success'>Borrar</button>
    </div>
  )
}


export default MiComponente