import React from 'react'

function MiComponente({rey,setTotal}) {
  const comprar = (elemento) =>{
    setTotal((e)=>e+rey.precio);
    elemento.target.parentNode.style.display="none";
  }

  return (
    <div className='rey' style={{backgroundColor:rey.color}}>
      <h1>{rey.nombre}</h1>
      <img src={rey.img} />
      <p>Precio: <br/> {rey.precio}$</p>
      <button onClick={comprar} className='btn btn-outline-danger'>comprar</button>      
    </div>
  )
}


export default MiComponente