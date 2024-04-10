import React from 'react'

function MiComponente({rey}) {

  return (
    <div className='rey'>
      <p> <span className='text-danger'>{rey.nombre.toUpperCase()}</span> ha comido {rey.vacasComidas*rey.reinado*365} en sus {rey.reinado} años de reinado</p>
      <img src={rey.img} />
    </div>
  )
}


export default MiComponente