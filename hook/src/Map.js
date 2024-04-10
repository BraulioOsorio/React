import React, { useState } from 'react';

const App = () => {

  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      img:"https://www.html6.es/img/rey_atanagildo.png",
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      img:"https://www.html6.es/img/rey_ervigio.png"
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      img:"https://www.html6.es/img/rey_ataulfo.png"
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      img:"https://www.html6.es/img/rey_leogivildo.png"
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      img:"https://www.html6.es/img/rey_recesvinto.png"
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      img:"https://www.html6.es/img/rey_sisebuto.png"
    }
  ]

  // const resultado1 = reyes.filter(valor=>valor.precio>=100 && valor.precio <=150).
  //                         map(valor=> <div key={valor.nombre}> {valor.nombre} se come un total de {valor.precio}</div>) 

  //const resultado1 = reyes.find(valor=>valor.precio>=100 && valor.precio <=150)

  const resultado1 = reyes.filter(valor=>valor.nombre.includes("v")).
  map(valor => <div key={valor.nombre}> {valor.nombre} se come un total de {valor.precio}</div>)

  return (
    <div className='container mt-5  text-center'>
      <div className='caja'>
        {resultado1}
      </div>
      
    </div>
  );
};

export default App;
