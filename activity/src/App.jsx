
import './App.css';
import React from 'react'
import Idiomas from './Idiomas'
import Pagina from './Pagina'
import Provider from './contexto/Provider';


function App() {
  return (
    <Provider>
      <div className='banderas'>
        <Idiomas/>
      </div>
      

      <div className='contenido'>
      <Pagina/>
      </div>
    </Provider>
  )
}

export default App
