import React from 'react';
import '../assets/css/login.css'
import { Link } from 'react-router-dom';
import authLayout from '../HOC/authLayout';
import 'bootstrap/dist/css/bootstrap.css';

 

export function  LoginPage(){


        return (

            <form onSubmit className="login-form">
                <div className="row">
                    <div className="logo col-md-3 my-4 login-img-form"> <img alt="hey" src={require('../assets/images/favicon.png')} className="img-fluid img_form"/> </div>
                <div className="d-flex align-items-center col-md-9 my-4 login-tittle-form">
                    <h1 className="fw-normal mb-1 me-3">¡Bienvenido!</h1>
                </div>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label">Usuario</label>
                    <input type="email" className="form-control form-control-lg" name="correoUsuario"  
                    placeholder="Email" />
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" name="contrasena" className="form-control form-control-lg"
                    placeholder="Contraseña" />
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    {/* <!-- Checkbox --> */}
                    <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                        Recordarme
                    </label>
                    </div>
                    <Link to="/reset-password" className="text-body">Restablecer contraseña?</Link>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                    <Link to='/' type="submit" name="submit" className="btn btn-primary btn-default" value="Acceder">Acceder</Link>
                    {/*<input type="submit" name="submit" className="btn btn-primary" value="Acceder"></input>*/}
                    <p> </p><br />
                </div>
            </form>
        )
    
}
export default authLayout(LoginPage);