import React from 'react'
import { useEffect,useState} from 'react';

function App() {
  const [lee,setLee] = useState();
  const [boton,setBoton] = useState(0);

  const otra = () =>{
    setBoton(boton+1);
  }
  
  useEffect(()=>{
    const url="https://official-joke-api.appspot.com/jokes/random";
    const peticion=fetch(url);
    peticion.then(datos=>datos.json())
    .then(lectura=>setLee(lectura.setup))
    .catch(()=>console.log("Error"))
  },[boton])

  return (
    <>
      <div>
        <div>{lee}</div>
        <button onClick={otra}>Otro Chiste</button>
      </div>
    </>
    
    
  )
}

export default App