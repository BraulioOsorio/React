import React, { useState } from 'react';

const App = () => {
  const [texto, setTexto] = useState('');
  const [numero, setNumero] = useState(0);
  const [texto1, setTexto1] = useState('');
  const [texto2, setTexto2] = useState('');
  const [reyesGodos, setReyesGodos] = useState([
    {
      nombre: "Ataulfo",
      aficion: "comer toros sin pelar",
    },{
      nombre: "Recesvinto",
      aficion: "leer a hegel en arameo",
    },{
      nombre: "Teodorico",
      aficion: "la cria del escarabajo en almibar",
    }
  ]);

  const ver = () => {
    setTexto(`La Afición secreta de ${reyesGodos[numero].nombre} es ${reyesGodos[numero].aficion}`);
    setNumero(numero + 1);
    if (numero === reyesGodos.length - 1) {
      setNumero(0);
    }
  };

  const guardar = () => {
    const nuevoRey = {
      nombre: texto1,
      aficion: texto2,
    };
    setReyesGodos([...reyesGodos, nuevoRey]);
    setTexto1('');
    setTexto2(''); 
  };

  return (
    <div className='container mt-5'>
      <button onClick={ver} className='btn btn-outline-success'>Ver la siguiente</button>
      <h2>{texto}</h2>
      <input value={texto1} onChange={(e) => setTexto1(e.target.value)} placeholder="Nombre del rey" />
      <input value={texto2} onChange={(e) => setTexto2(e.target.value)} placeholder="Afición del rey" />
      <button onClick={guardar} className='btn btn-outline-success'>Guardar</button>
    </div>
  );
};

export default App;
