import { Link } from "react-router-dom"
import node from '../logos/node.png'
import '../css/header.css';
import { Buscador } from "./Buscador.js";



export function Header() {
    return(
        <header>
            <nav>
                <img className="card-img-top img-fluid" src={node} alt="Card image cap"/>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/listado"}>Listado</Link>
                    </li>
                    <li>
                        <Link to={"/"}>Contactos</Link>
                    </li>
                </ul>
                <Buscador></Buscador>
                
            </nav>
            
        </header>
    )
}