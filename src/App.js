//librerias
import {  Routes, Route } from "react-router-dom";
//componentes

import { Login } from './componentes/Login';
import { Listado } from './componentes/Listado';
import { Header } from './componentes/Header';
import { Footer } from './componentes/Footer';
import { Detalle } from './componentes/Detalle';
import { Resultados } from './componentes/Resultados';

//style

import './css/app.css';
import './css/modal.css';

function App() {
  const addOrRemoveFromFavs= () =>{
    console.log("ddOrRemoveFromFavs")
  }

  return(
    <>
      <Header />
      <Routes>
      <Route exact path="/" element={ <Login  />} /> 
      <Route path="/listado" element = {<Listado props={{addOrRemoveFromFavs:addOrRemoveFromFavs}} /> } />
      <Route path="/detalle" element={<Detalle />}/>
      <Route path="/resultados" element={<Resultados />}/> 
      </Routes>
      <Footer/>
      </>

  );
}

export default App;
