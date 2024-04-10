import React,{useState} from 'react'

const App = () => {
  const [numero1,setNumero1] = useState();
  const [numero2,setNumero2] = useState();
  const [resultado,setResultado] = useState();

  const sumar = () =>{
    setResultado(Number(numero1)+Number(numero2));

  }
  
  const guardar = (e) =>{
    setNumero1(e.target.value);
  }
  const guardar2 = (e) =>{
    setNumero2(e.target.value);
  }
  return (
    <div>
      <input type='number' value={numero1} onChange={guardar} className=' rounded-4 text-warning text-center m-3 pt-5 pb-5'/> +
      <input type='number' value={numero2} onChange={guardar2} className=' rounded-4 text-warning text-center m-3 pt-5 pb-5'/> =
      <input type='number' value={resultado} className=' rounded-4 text-success text-center m-3 pt-5 pb-5' readOnly/>
      <button onClick={sumar} className='btn btn-outline-danger p-4'>Sumar</button>
    </div>
  )
}

export default App
