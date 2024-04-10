
import './App.css'

const App = () => {


  const reyes=[
    {
        nombre:"Atanagildo",
        reinado:15,
        vacasComidas:9,
        img:"https://www.html6.es/img/rey_atanagildo.png",
    },{
        nombre:"Ervigio",
        reinado:7,
        vacasComidas:3,
        img:"https://www.html6.es/img/rey_ervigio.png"
    },{
        nombre:"Ataúlfo",
        reinado:5,
        vacasComidas:16,
        img:"https://www.html6.es/img/rey_ataulfo.png"
    },{
        nombre:"Leovigildo",
        reinado:18,
        vacasComidas:3,
        img:"https://www.html6.es/img/rey_leogivildo.png"
    },{
        nombre:"Sisebuto",
        reinado:9,
        vacasComidas:13,
        img:"https://www.html6.es/img/rey_recesvinto.png"
    },{
        nombre:"Recesvinto",
        reinado:19,
        vacasComidas:11,
        img:"https://www.html6.es/img/rey_sisebuto.png"
    },{
        nombre:"Teodorico",
        reinado:33,
        vacasComidas:12,
        img:"https://www.html6.es/img/rey_teodorico.png"
    }
  ]
  const resultado = reyes.find(e => e.nombre.charAt(0)=="f" || e.nombre.charAt(0)=="f")
  return (
    <div className='mt-5  text-center'>
      <div className='cajaCentral'>
      {resultado == undefined ? "no se a encontrado" : resultado.nombre}
      </div>
    </div>
  );
};

export default App;
