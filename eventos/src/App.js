import imagen1 from './imagenes/rey_atanagildo.png'
import imagen2 from './imagenes/rey_sisebuto.png'
import {useRef} from 'react';

import './App.css';

function App() {
  const cambio = 4.000;
  const refCaja = useRef();

  const incrementar =(e)=>{
    const numero = Number(e.target.innerHTML)+1;
    if (numero >7){
      e.target.style.backgroundColor = "red";
    }
    if (numero > 9){
      e.target.innerHTML = 1;
      e.target.style.backgroundColor = "";

    }else{
      e.target.innerHTML = numero;
    }

  }
  const multiplicar=()=>{
    refCaja.current.innerHTML=Number(refCaja.current.innerHTML)*cambio;
  }
  const cambiar=(e)=>{
    if(e.target.src.includes("atanagildo")){
      e.target.src=imagen2;
    }else{
      e.target.src=imagen1;
    }

  }
  const lectura=(e)=>{
    const texto = e.target.value;
    refCaja.current.innerHTML = texto;
  }
  return (
    <>
      <div className='caja' ref={refCaja} onClick={incrementar}>1</div>
      <button className='btn btn-success' onClick={multiplicar}>Aceptar</button>
      <div>
        <img onClick={cambiar} src={imagen1} className='img'/>
      </div>
      <input onChange={lectura} className='campo'/>
    
    </>
  );
}

export default App;
