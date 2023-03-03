
import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";



export function Detalle(){
    //con esto tengo el token y el id 

    let token = sessionStorage.getItem("token");
    let query = new URLSearchParams(window.location.search);
    let pelisID = query.get("pelisID")
    console.log(pelisID)

    const [pelisData, setPelisData] = useState(null);





    useEffect(() => {



        console.log(pelisID)
      
        const endPoint2= `https://api.themoviedb.org/3/movie/${pelisID}?api_key=8f2a16d4f0d2593718febacdf7b1d495&language=es-ES&page=1`
        axios.get(endPoint2).then(resp =>{
            const pelisdata = resp.data
            console.log(pelisdata)
        
            setPelisData(pelisdata)
        })
        
        .catch(error=>{
            console.log(error)
        })


        return () => {

        };
    }, [pelisID]);


  



    return(
    <>
        {!token && <Navigate to="/"/>}

        {!pelisData && <>   <div className="d-flex justify-content-center">
                                <div className="spinner-grow" role="status">
                                    <span className="sr-only">uff</span>
                                </div>
                            </div> 
                        </>}
            {pelisData && <>


                    <h2>Detalle de la Pelicula</h2>
                    <div className="row">
                    <div className="col-4">
                    <img className=" img-fluid" src={`https://image.tmdb.org/t/p/w500/${pelisData.poster_path}`} alt="Poster"/>
                    </div>
                    <div className="col-8">
                        <h5>{pelisData.title}</h5>
                        <h5>{pelisData.release_date}</h5>
                        <h5>{pelisData.overview}</h5>
                        <h5>Generos</h5>
                        <ul>
                            {pelisData.genres.map(generos => <li key={generos.id}>{generos.name}</li>)}
                        
                        </ul>
                    </div>
                    </div>


            
            </>
            }


    </>
        )
};