import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import "../assets/css/profile.css"
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';
import { FaHome, FaUserCheck, FaFileMedical, FaSyringe, FaUserInjured } from "react-icons/fa"

const perfil = "usuario"
class Sidebar extends React.Component {
    constructor(props){
        
        super(props)
        

        this.state = {
            
        }
        
    } 

    
    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    <img class="imgprofile" alt="Alt content"  src={require('../assets/images/favicon.png')} />
                </Link>
                <br />
                <div><Link to="/perfil" className="Sidebartittle">Hola, { perfil }</Link></div>
                <p> </p><br />
            </div>
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/">
                        <FaHome /> Inicio
                        </Link>
                    </li> 
                        <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/paciente">
                        <FaUserInjured />    Pacientes
                        </Link>
                    </li>                    
                    <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/muestra">
                        <FaSyringe /> Muestra
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/resultado">
                        <FaFileMedical /> Resultado
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/">
                        <FaUserCheck /> Administración
                        </Link>
                    </li>

                   
                </ul>
            </PerfectScrollbar>
            <div className=" fixed-bottom-dropdown">
                <div className="row ">
                    <div className="col sidebar-container">
                        <img alt="Alt content" src={require('../assets/images/favicon.png')} width="32" height="32" className="rounded-circle me-2" />
                    </div>   
                    <div className="col sidebar-container-text">
                        <Link className="dropdown-item" to="/login" ><i className="fa " aria-hidden="true"></i> Cerrar sesión</Link>
                    </div>  
                </div>      
            </div>
        </div>
    }
}

export default Sidebar;