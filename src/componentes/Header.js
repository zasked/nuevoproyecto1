import { Link } from "react-router-dom"
import {  useNavigate } from "react-router-dom"
import node from '../logos/node.png'
//import '../css/header.css';
import { Buscador } from "./Buscador.js";



export function Header() {

    const navigate = useNavigate();
    const salirSesion = () => {
        sessionStorage.clear();
        navigate("/");
 
    };



    let token = sessionStorage.getItem("token")
      




    return(
        <header className="position-sticky" style={{width:"100%"}}>


            <nav className="navbar  bg-dark">
                
            <div className="container-fluid">
           
                <ul className="nav ">
                    <div className="navbar-brand" href="#">
                        <img src={node} width="30" 
                        height="30" 
                        className="d-inline-block align-top" 
                        alt="IMAGEN DE NODE">
                        </img>
                    </div>
                   
                    <li className="nav-item">
                        <Link className="nav-link" 
                            to={"/"}>Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" 
                            to={"/listado"}>Listado
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" 
                            to={"/favoritos"}>Favoritos
                        </Link>
                    </li>
                   
                    {token  && 
                        <li className="nav-item ml-auto">
                            <button className="btn btn-primary px-3 text-white"
                                    style={{ backgroundColor: "#8C00FF" }} 
                                    onClick={salirSesion}>
                            Salir
                            </button>
                           
                           
                        </li>
                        }
                    
                </ul>
                <li className="nav-item d-flex  align-items-center favoritos-count ml-5 contadorFavorito">
                                    
                             
                    </li>
            
                    {token && <Buscador/>}
                </div>
                
            </nav>
            
        </header>
    )
}