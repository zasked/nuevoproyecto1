import {  useNavigate, Navigate } from "react-router-dom"
import swAlert from '@sweetalert/with-react';





export function Buscador() {

    const navigate = useNavigate();



    //evento e
    const submitHandler = e =>{
   
        const keyword = e.currentTarget.keyword.value.trim();
        console.log(keyword.length)
        e.preventDefault();
        //el trim() quita los espacios delante y atras de lo escrito

        if ( keyword.length === 0) {
           
            swAlert(
                <h1>el campo no puede estar vacio</h1>
            );   
        }else if(keyword.length <= 4){
            swAlert(
                <h1>debe ingresar mas de 4 caracteres</h1>
            );
        }else{

            swAlert(
                <h1>felicidades</h1>
            );
            e.currentTarget.keyword.value= "";
            navigate(`/resultados?keyword=${keyword}`)
            console.log("3")
            }

    }

    let token = sessionStorage.getItem("token")
//fin del evento

    return(
        <>
            {!token ? <Navigate to="/"/>:<>
            <form className="d-flex align-items-center px-4 buscador" onSubmit={submitHandler}>
                <label className="form-label mb-0 mx-1">
                    <input className="form-control  " type="text" name="keyword" placeholder="escriba una palabra"/>
                </label>
                    <button 
                        className="btn btn-primary px-3"  
                        type="submit" 
                        style={{ backgroundColor: "#8C00FF" }} >
                            BUSCAR
                    </button>
                    
            </form></>}
        
        
        
        
        </>
    )
}