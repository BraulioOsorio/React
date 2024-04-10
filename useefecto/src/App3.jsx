import React from 'react'
import { useEffect,useState} from 'react';

function App() {

  const [datos,setdatos] = useState(""); 

  useEffect(()=>{
    const url="https://official-joke-api.appspot.com/jokes/ten";
    const peticion=fetch(url);
    peticion.then(datos=>datos.json())
    .then(lectura=>{
      lectura.map((chistes)=>{
        setdatos((e)=>
          [e,<div className='border border-success m-2 p-3' key={chistes.id}> 
            <div>{chistes.setup} , {chistes.punchline}</div>
          </div>]
        )
        })
    })
    .catch(()=>console.log("Error"))
  },[])

  return (
    <>
      <div>
        <div>{datos}</div>
      </div>
    </>
    
    
  )
}

export default App