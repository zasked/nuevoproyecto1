import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Favoritos () {

    const [favoritos, setFavoritos] = useState(["---"])
    useEffect(() => {
        const favInLocal = localStorage.getItem("fav")
      // console.log("es estooooo", favInLocal)
       if(favInLocal!==null){
        const favsArray = JSON.parse(favInLocal)
        setFavoritos(favsArray)
       }
    }, []);
 



  //  {!token ? <Navigate to="/"/>:<>
/*
  <button className="favourite-btn" 
  onClick={props.activar} 
  data-movie = {favoritos.id}   
/>*/
console.log(favoritos)
    return(
        <>
 

        
            <div className="row" >

        
                {
                favoritos.map((favoritos, i) => {
                    return ( 
                        <div className="col-3" key={i}>
                        <div className="card my-3 img-fluid"   style={{ width: '18rem' }}  >
                        
                            <img className="card-img-top img-fluid"
                                 src={favoritos.imgURL}
                                 alt="Card cap"
                            />

                            

                            <div className="card-body">

                                <h5 className="card-title" >
                                    {favoritos.title?favoritos.title.substring(0,50):null}
                                </h5>

                                <p className="card-text">{favoritos.title?favoritos.overview.substring(0,100):null}  
                                </p>

                                <div className="contenedorboton">
                                    <Link to={`/detalle?pelisID=${favoritos.id}`} 
                                        className="btn btn-primary botontarjeta" >Go somewhere
                                    </Link>

                                </div>
                            </div>
                        </div>
                        </div>
                    )
                } )}
            </div>
        
        </>

    )
}