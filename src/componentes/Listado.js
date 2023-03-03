//import { useNavigate } from "react-router-dom";
//import { useEffect} from "react";
import { Link, Navigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import '../css/listado.css';





export function Listado (props){
console.log(props)

    const [movieList, setMovieList] = useState(["----"]);

        let token = sessionStorage.getItem("token") 
        useEffect(() => {
            const endPoint= "https://api.themoviedb.org/3/discover/movie?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&page=1";
            axios.get(endPoint)
            .then(resp =>{ 
                const apiData = resp.data
                setMovieList(apiData.results)})
                .catch(error => {
                    console.log(error)
                })

                //estas comillas del useEffect  
            },[ setMovieList]);
console.log()


    

   
     //  const navigate = useNavigate();
  
  
    /* useEffect(() => {
 
  
    const token = localStorage.getItem("token")
    console.log(token)

    if (token === null) {
        navigate("/")
    }
   }, []);*/



    return(
            <>
                {!token ? <Navigate to="/"/>:<>

            
                <div className="row" >

            
                    {
                    movieList.map((pelis, i) => {
                        return ( 
                            <div className="col-3" key={i}>
                            <div className="card my-3 img-fluid"   style={{ width: '18rem' }}  >
                            
                                <img className="card-img-top img-fluid"
                                     src={`https://image.tmdb.org/t/p/w500/${pelis.poster_path}`}
                                     alt="Card cap"
                                />
                                <button className="favourite-btn" 
                                        onClick={props.activar} 
                                        data-movie = {pelis.id}   
                                />
                                

                                <div className="card-body">

                                    <h5 className="card-title" >
                                        {pelis.title?pelis.title.substring(0,50):null}
                                    </h5>

                                    <p className="card-text">{pelis.title?pelis.overview.substring(0,100):null}  
                                    </p>

                                    <div className="contenedorboton">
                                        <Link to={`/detalle?pelisID=${pelis.id}`} 
                                            className="btn btn-primary botontarjeta" >Go somewhere
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            </div>
                        )
                    } )}
                </div>
            </>}
            </>

        )
}