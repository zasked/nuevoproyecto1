import { useEffect, useState } from "react";  // Importa las funciones de React que se usarán en este componente
import axios from "axios";  // Importa el módulo Axios para hacer solicitudes HTTP
import { Link, useLocation, Navigate } from "react-router-dom"  // Importa funciones de React Router
import swAlert from '@sweetalert/with-react';  // Importa SweetAlert, una librería de alertas personalizables

export function Resultados(props) {  // Crea un componente llamado "Resultados" que recibe props como parámetro

    const url = useLocation();  // Obtiene la URL actual de la página

    let query = new URLSearchParams(url.search);  // Obtiene los parámetros de la búsqueda en la URL
    let key = query.get(`keyword`)  // Obtiene el valor del parámetro "keyword" en la URL

    console.log(key)  // Imprime el valor de la variable "key" en la consola

    const [movieResults, setMovieResults] = useState([]);  // Crea un estado inicial vacío llamado "movieResults" y una función "setMovieResults" para actualizar ese estado

    useEffect(() => {  // Crea un efecto que se ejecutará cuando el componente se monte o cuando "key" cambie su valor

        const MovieBuscar= `https://api.themoviedb.org/3/search/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&query=${key}`  // Crea una variable "MovieBuscar" con la URL de la API de películas, incluyendo el valor de "key" en la búsqueda

        axios.get(MovieBuscar)  // Hace una solicitud GET a la API de películas usando Axios
            .then(resp =>{  // Si la solicitud se completa correctamente, se ejecuta esta función
                    const movieArray = resp.data.results  // Obtiene los resultados de la búsqueda de la API y los guarda en una variable llamada "movieArray"
                    console.log(movieArray)  // Imprime el valor de "movieArray" en la consola

                    if (movieArray.length===0) {  // Si "movieArray" está vacío, se ejecuta este bloque de código
                        swAlert(<h3>No se encontro Resultados</h3>)  // Muestra una alerta personalizada usando SweetAlert
                        console.log(movieArray)  // Imprime el valor de "movieArray" en la consola
                    }

                    setMovieResults(movieArray)  // Actualiza el estado "movieResults" con los resultados de la búsqueda de la API
            }   )
//      si tengo errores no se me rompe todo el sistema                                                
                .catch(error => {  // Si hay un error al hacer la solicitud GET, se ejecuta este bloque de código
                    console.log(error)  // Imprime el error en la consola

                })

            },[key]);  // El efecto se ejecutará cada vez que "key" cambie su valor

    let token =  sessionStorage.getItem("token")  // Obtiene el token almacenado en sessionStorage

    return(  // Devuelve lo siguiente
    <>
    {!token ? 
      <Navigate to="/" />
     : (
      <>
        <div className="row">
          <h2>Buscastes: <em>{key}</em></h2>
          {movieResults.length === 0 && <h3>No se encontro Resultados</h3>}
          {movieResults.map((pelis, i) => {
            return (
              <div className="col-3" key={i}>
                <div
                  className="card my-3 img-fluid"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top img-fluid"
                    src={
                      pelis.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${pelis.poster_path}`
                        : "/path/to/fallback-image.jpg"
                    }
                    alt="Card cap"
                   
                  />
                  <button
                    className="favourite-btn"
                    onClick={props.activar}
                    data-movie={pelis.id}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {pelis.title ? pelis.title.substring(0, 50) : null}
                    </h5>
                    <p className="card-text mb-4">
                      {pelis.title ? pelis.overview.substring(0, 100) : null}
                      ...
                    </p>
                    <div className="contenedorboton">
                      <Link
                        to={`/detalle?pelisID=${pelis.id}`}
                        className="btn btn-primary botontarjeta"
                      >
                        Mas Detalle
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    )}
  </>
);
}