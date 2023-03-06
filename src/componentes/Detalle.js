
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
                                    <span className="sr-only">No se encontro la pelicula</span>
                                </div>
                            </div> 
                        </>}
            {pelisData && 
                <>

                    <div className=" card mb-0 " style={{ maxWidth: "100%"}} >
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center">
                                <img src={`https://image.tmdb.org/t/p/w500/${pelisData.poster_path}`} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "white"}}>{pelisData.title}</h5>
                                    <p className="card-text" style={{ color: "white"}}>{pelisData.overview}</p>
                                    <p className="card-text"  ><small style={{ color: "white"}}>{pelisData.release_date}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                 
                
                </>
            }


    </>
        )
};