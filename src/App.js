//librerias
import {  Routes, Route } from "react-router-dom";
//componentes

import { Login } from './componentes/Login';
import { Listado } from './componentes/Listado';
import { Header } from './componentes/Header';
import { Footer } from './componentes/Footer';
import { Detalle } from './componentes/Detalle';
import { Resultados } from './componentes/Resultados';
import { Favoritos } from './componentes/Favoritos';
//style

import './css/app.css';
import './css/modal.css';

function App() {

  const removeOrAdd= (evento) =>{
    //obtengo lo que tengo en el local y si no hay nada genero el array
    const favMovies = localStorage.getItem("fav")
    //  console.log(favMovies)
      let tempMoviesFavs;
    
      if (favMovies===null) {
        
        tempMoviesFavs= []
    
      }else{
        tempMoviesFavs= JSON.parse(favMovies);
        //jsonparse parsea a json
      }
    
 
      
    const btn = evento.currentTarget;
    const parent = btn.parentElement;
    //parentelement obtiene los datos del contenedor osea y sus hijos para acceder a todo
   // console.log(btn)
    const imgURL = parent.querySelector("img").getAttribute("src")
    const title = parent.querySelector("h5").innerText
    const overview = parent.querySelector("p").innerText
    //innertext obtiene el text de la etiqueta
   // console.log(btn.dataset)
    const movieData = {
      imgURL, 
      title,
      overview,
      id : btn.dataset.movie
      //dataset obtiene los datos de el tag, para esto lo colocas como un atributo
      //de la forma siguiente data-movie = eldato
    }

    //   console.log(movieData)

    let estaLaMovie = tempMoviesFavs.find(oneMovie => {
    return(oneMovie.id === movieData.id)
    });

//verifico si esta o no la pelicula y la agrego o la elimino
    if(!estaLaMovie){
      tempMoviesFavs.push(movieData)
      localStorage.setItem("fav", JSON.stringify(tempMoviesFavs))
      
      
    }
    else{
      let quitarMovie =tempMoviesFavs.filter(oneMovie => {
        return (oneMovie.id !== movieData.id && console.log("las pelicullas "))
      })
     localStorage.setItem("fav", JSON.stringify(quitarMovie))
     // console.log("se elimino ", movieData.id, movieData.title )

    }



  }
  //stringify pisa los datos



  



return(
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={ <Login  />} /> 
        <Route path="/listado" element = {<Listado activar={removeOrAdd}/>}/>
        <Route path="/detalle" element={<Detalle />}/>
        <Route path="/resultados" element={<Resultados />}/> 
        <Route path="/favoritos" element={<Favoritos />}/> 
      </Routes>
      <Footer/>
    </>

  )
}
export default App;
