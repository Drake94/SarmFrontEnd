import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import "../assets/css/profile.css"
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import { FaSignOutAlt,FaHome, FaUserCheck, FaFileMedical, FaSyringe, FaUserInjured, FaList } from "react-icons/fa"

class Sidebar extends React.Component {
    constructor(props){
        
        super(props)
        

        this.state = {
            user: " ",
            rol: " ",
            rut:" ",
            correo:"",
            imgUrl:"",
            open: true
        }
        this.state.user = localStorage.getItem('usuario');
        this.state.rol = localStorage.getItem('cargo');
        this.state.rut = localStorage.getItem('rut');
        this.state.correo = localStorage.getItem('correo');
        this.state.imgUrl = localStorage.getItem('imgUrl');
    } 

    
    render(){
        const sideContainerVariable={
            true:{
                width: '25rem'
            },
            false:{
                transition:{
                    delay: 0.6
                },
                width:'5rem'
            }
        }
        const subHeading={
            true:{
                opacity:1
            },
            false:{
                display: 'none'
                
            }
        }
        const subIcon={
            className: 'centerIcon',
            true:{
                opacity:1
            },
            false:{
                alignItems: 'center',
                className: 'centerIcon' 
                
                
                
            }
        }

        const handleToggle =() =>{
            if(this.state.open === true){
                this.setState(() => ({
                    open :false 
                    }))
            }else if(this.state.open === false){
            this.setState(() => ({
                open :true 
                }))
                
            }
            console.log(this.state.open)
        }

        const LogOut =()=>{
            localStorage.removeItem('correo');
            localStorage.removeItem('usuario');
            localStorage.removeItem('cargo');
            localStorage.removeItem('rut');
            localStorage.removeItem('image');
            document.cookie = `token = ; expires=Thu, 01 Jan 1970 00:00:00 UTC;`
            console.log(document.cookie)
            const token = '';
            console.log(token)
            localStorage.clear();
            
        }
        return<motion.div 
            data-Open = {this.state.open}
            variants={sideContainerVariable}
            initial= {`${this.state.open}`}
            animate= {`${this.state.open}`} 
            className="border-end sidenav" id="sidebar-wrapper">
            <div className="sidebar-heading border-bottom ">
            <motion.div whileHover={{
                scale:1.2,
                rotate:180,
                backdropcolor:"rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3.5px)",
                WebkitBackdropFilter:"blur(3.5px)",
                border: "1px solid rgba(255, 255, 255, 0.18)"
            }}
             onClick={handleToggle}
             className="menu_icon">
                <FaList/>
            </motion.div >
                <Link to="/perfil">
                    <img className="imgprofile" alt="Alt content"  src={this.state.imgUrl} />
                </Link>
                <br />
                <div><Link to="/perfil" className="Sidebartittle" title="Ver perfil"><motion.sidebartext  variants={subHeading}>Hola, { this.state.user }</motion.sidebartext></Link></div>
                <p> </p><br />
            </div>
            <motion.div layout variants={subIcon}  className="sidebar-items" >
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/" >
                        <FaHome /> <motion.sidebartext  variants={subHeading}>Inicio</motion.sidebartext>
                        </Link>
                    </li> 
                        <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/pacientes">
                        <FaUserInjured /> <motion.sidebartext variants={subHeading}>Pacientes</motion.sidebartext>
                        </Link>
                    </li>                    
                    <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/muestras">
                        <FaSyringe /> <motion.sidebartext variants={subHeading}>Muestra</motion.sidebartext>
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="sidebartext" to="/resultados">
                        <FaFileMedical /> <motion.sidebartext variants={subHeading}>Resultado</motion.sidebartext>
                        </Link>
                    </li>
                    <li className="mb-1">
                        { this.state.rol === "Administrador" ?
                        <Link className="sidebartext" to="/">
                            <FaUserCheck /> <motion.sidebartext variants={subHeading}>Administración</motion.sidebartext>
                        </Link> : 
                        <p className="sidebartextDisabled">
                            <FaUserCheck /> <motion.sidebartext variants={subHeading}>Administración</motion.sidebartext>
                        </p>}
                    </li>

                   
                </ul>
            </motion.div >
            <div className=" fixed-bottom-dropdown">
                <div className="row ">
                    <div className="col sidebar-container">
                    <motion.sidebartext variants={subHeading}><img alt="Alt content" src={require('../assets/images/favicon.png')} width="32" height="32" className="rounded-circle me-2" /></motion.sidebartext>
                    </div>   
                    <div className="col sidebar-container-text">
                        <Link className="dropdown-item" to="/login" onClick={ LogOut }><FaSignOutAlt/><motion.sidebartext variants={subHeading}> Cerrar sesión</motion.sidebartext></Link>
                    </div>  
                </div>      
            </div>
        </motion.div>
        
    }
}

export default Sidebar;