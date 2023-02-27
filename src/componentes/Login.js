import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import '../css/login.css';




export function Login(e){
    const navigate = useNavigate();   
       
   // e.prevent.default()
    
    const submitHandler = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regetEmail =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        console.log(regetEmail.test(email));
        if (email==="" || password==="" ) {
            //los campos n pueden esta vacios
            return(console.log("los campos no pueden estar vacios"))           
        }
        if (email!=="" && !regetEmail.test(email)) {
            //debe colocar direccion  valida
            return(console.log("deben colocar un email valido"))
        }
        if (email!=="challenge@alkemy.org" || password!=="react") {
            //debe ingresar los datos correctamente
            return(
                console.log("email o constraseña incorrecta"))
        }
        //si comprueba esto  luego de esto entra

        
        axios.post("http://challenge-react.alkemy.org",{email,password})
        .then(resp => {
            const tokenRecibido= resp.data.token
            sessionStorage.setItem("token", tokenRecibido)
            navigate("/listado")
            
        }
            )
         
    }
    let token =  sessionStorage.getItem("token")
    return(
        
            <>
                {token && <Navigate to="/listado"/>}
                <div className="contenedormain">  
                    <h1>Formulario</h1>
                    <form onSubmit={submitHandler} className="form-group mx-auto">
                        <div class="form-group">
                            <label ><span>Introduzca su email</span> 
                            <br/>
                            <input type="text" name="email" placeholder="email" className="form-control"></input>
                            </label>
                            <br/>
                            <label ><span>Introduzca su constraseña</span>
                            <br/>
                            <input type="password" name="password" autoComplete="current-password" placeholder ="constraseña" className="form-control"/>
                            </label>
                            <br/>
                            <br/>
                            <div className="cajadeBoton">

                            <input type="submit" className=" btn btn-info"  ></input>
                            </div>
                        </div>
                    
                    </form>
                </div>
   </>
    );
}