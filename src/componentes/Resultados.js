import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, Navigate } from "react-router-dom"
import swAlert from '@sweetalert/with-react';

export function Resultados() {

    const url = useLocation();
 
    let query = new URLSearchParams(url.search);
    let key = query.get(`keyword`)

    console.log(key)
    
    const [movieResults, setMovieResults] = useState([]);
 

  
        useEffect(() => {

            

            const MovieBuscar= `https://api.themoviedb.org/3/search/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&query=${key}`
            axios.get(MovieBuscar)
            .then(resp =>{ 
//     
                    const movieArray = resp.data.results
                    console.log(movieArray)

                    if (movieArray.length===0) {
                        swAlert(<h3>No se encontro Resultados</h3>)
                        console.log(movieArray)
                    }

                    setMovieResults(movieArray)
            }   )
//      si tengo errores no se me rompe todo el sistema                                                
                .catch(error => {
                    console.log(error)

                })

                //estas comillas del useEffect  
            },[key]);



let token =  sessionStorage.getItem("token")
  return(
    <>    
    {!token ? <Navigate to="/"/>:<>
        <div className="row" >

            <h2>Buscastes: <em>{key}</em></h2>
            {movieResults.length===0 && <h3>No se encontro Resultados</h3> }
            {
            movieResults.map((pelis, i) => {
                return ( 
                    <div className="col-3">
                        
                    <div className="card my-3 img-fluid"   
                        style={{ width: '15rem' }}  >
                        <img    
                                className="card-img-top img-fluid" 
                                src={`https://image.tmdb.org/t/p/w500/${pelis.poster_path}`} 
                                alt="Card"
                        />

                        <button 
                            type="buttom" 
                            className="favourite-btn"
                        />

                        <div className="card-body">

                            <h5 
                                className="card-title" 
                                key={i}>{pelis.title?pelis.title.substring(0,50):null}
                            </h5>

                            <Link 
                                to={`/detalle?pelisID=${pelis.id}`} 
                                className="btn btn-primary">Go somewhere
                            </Link>

                        </div>
                    </div>
                    </div>
                )
            } )}
        </div>
    </>}
    </>)
}