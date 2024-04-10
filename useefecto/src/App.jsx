import React from 'react'
import { useEffect,useState} from 'react';

function App() {
  const [lee,setLee] = useState();

  const [datos,setdatos] = useState(""); 

  useEffect(()=>{
    const url="https://randomuser.me/api/?results=3";
    const peticion=fetch(url);
    peticion.then(datos=>datos.json())
    .then(lectura=>{
      lectura.results.map((persona)=>{
        setdatos((e)=>
          [e,<div key={persona.email}> 
            <div>{persona.name.first} {persona.name.last}</div>
            <div>
              <img src={persona.picture.large} alt="" />
            </div>
          </div>]
        )
        })
    })
    .catch(()=>console.log("Error"))
  },[])
  
  const leer = (e) =>{
    setLee(e.target.value);
  }

  return (
    <>
      <div>
        <h1>Empreados del mes</h1>
        {/* <h1>{nombre}</h1>
        <input type="text" value={lee} onChange={leer}/> 
        <img src={imagen} alt="" />*/}
        <div>{datos}</div>
      </div>
    </>
    
    
  )
}

export default App