import './App.css'
import {useState } from 'react';
import MiComponente  from './MiComponente';


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

  const [total,setTotal] = useState(0);
  
  return (
    <>
      <h1>Total a pagar: {total}$</h1>
      <div className='cajaCentral'> 
        {reyes.map((rey) => (
          <MiComponente rey={rey} setTotal={setTotal}/>
        ))}
      </div>


      
    </>
  );
};

export default App;
