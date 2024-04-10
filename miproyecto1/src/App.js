import './App.css';
import imagen1 from './imagenes/rey_sisebuto.png'
import imagen2 from './imagenes/rey_leogivildo.png'
import imagen3 from './imagenes/rey_atanagildo.png'
import inconito from './imagenes/rey_incognito.png'

function App() {

  const cambiarImagen = (e)=>{
    const nombre = e.target.src;
    if (nombre.includes("sisebuto") || nombre.includes("atanagildo") || nombre.includes("leogivildo") ){
      e.target.src=inconito;
      
    }
    if(nombre.includes("incognito")){
      e.target.src = "";
      e.target.style.visibility = "hidden";
      
    }
    
    e.target.parentNode.style.backgroundColor="white";
  }
  const cambiarTexto = (e)=>{
    const texto = e.target.textContent;
    if (texto == "Sisebuto"  || texto == "Atanagildo" || texto == "Leogivildo" ){
      e.target.textContent="Visto";
    }
    if(texto == ("Visto")){
      e.target.textContent = "";
    }


  }
  return (
    <div className='contenedor'>
      <div className='row'>
        <div className='App col-4'>
          <img src={imagen1} onClick={cambiarImagen} className='im'/>
          <h1  onClick={cambiarTexto} className='text-dark'>Sisebuto</h1> 
        </div>
        <div className='App col-4'>
          <img src={imagen2} onClick={cambiarImagen} className='im'/>
          <h1 onClick={cambiarTexto} className='text-dark'>Leogivildo</h1> 
        </div>
        <div className='App col-4'>
          <img src={imagen3} onClick={cambiarImagen} className='im'/>
          <h1 onClick={cambiarTexto} className='text-dark'>Atanagildo</h1> 
        </div>
      </div>

    </div>
    
  );
}

export default App;
