import { Link } from "react-router-dom"
import node from '../logos/node.png'
//import '../css/header.css';
import { Buscador } from "./Buscador.js";


//<img className="card-img-top img-fluid" src={node} alt="Card image cap"/>

/*
<div class="container-fluid">
<Link className="nav-link active" aria-current="page"  to={"/"}>Home</Link>


    <Link className="nav-link active" aria-current="page"  to={"/"}>Home</Link>
    <Link className="nav-link active" aria-current="page" to={"/listado"}>Listado</Link>
    <Link className="nav-link active" aria-current="page" to={"/favoritos"}>Favoritos</Link>



<div class="navbar-collapse">
<div class="navbar-nav">
    <Link className="nav-link active" aria-current="page"  to={"/"}>Home</Link>
    <Link className="nav-link active" aria-current="page" to={"/listado"}>Listado</Link>
    <Link className="nav-link active" aria-current="page" to={"/favoritos"}>Favoritos</Link>


</div>

</div>
<Buscador></Buscador>
</div>



*/


export function Header() {
    return(
        <header>


            <nav class="navbar navbar-dark bg-dark">
                
            <div class="container-fluid">
           
                <ul class="nav ">
                    <a class="navbar-brand" href="#">
                        <img src={node} width="30" 
                        height="30" 
                        class="d-inline-block align-top" 
                        alt="IMAGEN DE NODE">
                        </img>
                    </a>
                   
                    <li class="nav-item">
                        <Link class="nav-link" 
                            to={"/"}>Home
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" 
                            to={"/listado"}>Listado
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" 
                            to={"/favoritos"}>Favoritos
                        </Link>
                    </li>
                </ul>
                <Buscador/>
                </div>

            </nav>
            
        </header>
    )
}