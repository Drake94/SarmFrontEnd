import React from "react";
import adminLayout from "./adminLayout"
import "../assets/css/profile.css"
import { NavLink, Link } from "react-router-dom";
import Swal from "sweetalert2";

const userProfileLayout = (ChildComponent) => {
    class UserProfilePageHoc extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {    
                auser: " ",
                rol: " ",
                rut:" ",
                correo:"",
            }

            this.state.auser = localStorage.getItem('usuario');
            this.state.rol = localStorage.getItem('cargo');
            this.state.rut = localStorage.getItem('rut');
            this.state.correo = localStorage.getItem('correo');
        }

    
        render(){
            const userDiferentAdmin = () =>{
                Swal.fire({
                    icon: 'error',
                    title: 'Acceso no autorizado',
                    text:  'Su cargo es '+ this.state.rol +', Acceso solo para administradores ',
                    confirmButtonText: 'Aceptar'
                })
            }
            
            return <>
                <div className="container">
                    <div className="row profile">
                        <div className="col-md-3">
                                <div className="profile-sidebar">
                                    <div className="my-3 p-3 bg-body rounded shadow-sm">
                                    {/* <!-- SIDEBAR USERPIC --> */}
                                    <div className="profile-userpic">
                                        <img alt="hey" src={require('../assets/images/favicon.png')} className="img-responsive profile-img-center" />
                                    </div>
                                    {/* <!-- END SIDEBAR USERPIC -->
                                    <!-- SIDEBAR USER TITLE --> */}
                                    <div className="profile-usertitle">
                                        <div className="profile-usertitle-name">
                                            Hola { this.state.auser}
                                        </div>
                                        <div className="profile-usertitle-job">
                                            {this.state.rol}
                                        </div>
                                    </div>
                                    {/* <!-- END SIDEBAR USER TITLE -->
                                    <!-- SIDEBAR BUTTONS --> */}  
                                    <hr/>                
                                    <div>
                                        <div className="bd-example">
                                            <div className="list-group">
                                                <label  className="form-label">Nombre: { this.state.auser}</label>
                                                <label  className="form-label">Rut: { this.state.rut}</label>
                                                <NavLink to="/change-password" className={({ isActive }) => `list-group-item list-group-item-action ${isActive ? 'active': ''}`}>Cambiar Clave</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <br />
                                <label  className="form-label layouttext">Medicos registrados</label>
                                { this.state.rol === "Administrador" ?
                                    <Link to='/medicos' type="submit" name="submit" className="btn btn-primary btn-lg btn-default2" value="Acceder">
                                    Ver 
                                </Link> :
                                    <Link to='' type="submit" onClick={userDiferentAdmin}  name="submit" className="btn btn-primary btn-lg btn-default2" value="Acceder">
                                    Ver 
                                    </Link>
                                    }
                                
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="profile-content">
                                <ChildComponent {...this.props} />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    }

    return adminLayout(UserProfilePageHoc);
}


export default userProfileLayout;