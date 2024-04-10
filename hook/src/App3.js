import React, { useState } from 'react';

const App = () => {
  const [pA,setpA] = useState();
  const [pC,setpC] = useState();
  const [pM,setpM] = useState();
  const [euro,setEuro] = useState();
  const [dollar,setDollar] = useState();
  const valores = (e)=>{
    setEuro(Number(e.target.value));
    setpA(Number(e.target.value)*118.6);
    setpC(Number(e.target.value)*4543.45);
    setpM(Number(e.target.value)*23.2);
    setDollar(Number(e.target.value)*1.14);
  }

  return (
    <div className='container mt-5  text-center'>
      <div className='row '>
        <div className='col-12 d-flex flex-column'> 
          <label> Euro </label>
          <input type="number" value={euro} onChange={valores} className='pt-3 pb-3 text-center text-danger' />
        </div>
        <div className='col-12 d-flex flex-column'> 
          <label> Peso Argentino </label>
          <input value={pA}  className='pt-3 pb-3 text-center  text-danger' readOnly />
        </div>
        <div className='col-12 d-flex flex-column'> 
          <label> Peso Colombiano </label>
          <input value={pC}  className='pt-3 pb-3 text-center  text-danger' readOnly />
        </div>
        <div className='col-12 d-flex flex-column'> 
          <label> Peso Mexicano </label>
          <input value={pM}  className='pt-3 pb-3 text-center  text-danger' readOnly />
        </div>
        <div className='col-12 d-flex flex-column'> 
          <label> Dollar </label>
          <input value={dollar}  className='pt-3 pb-3 text-center  text-danger' readOnly />
        </div>
        
      </div>
    </div>
  );
};

export default App;
