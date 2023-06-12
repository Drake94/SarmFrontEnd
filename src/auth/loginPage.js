import React, {useState} from 'react';
import '../assets/css/login.css'
import { Link } from 'react-router-dom';
import authLayout from '../HOC/authLayout';
import 'bootstrap/dist/css/bootstrap.css';
import {loginMedic} from '../Medico/services'
import swal from 'sweetalert2'
import { useNavigate } from "react-router-dom/dist";

const LoginPage = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [medic, setMedic] = useState([]);
    const[user, setUser] = useState({
        correo:'',
        clave:'',
    })

    const handleChange = (event) =>{
        const { name, value} = event.target
        setUser({...user, [name]:value})
    }

    const submitForm= async (e)=> {
        e.preventDefault();
        const sendData = user
        const logInUser = await loginMedic(sendData)
        if (!logInUser) {
            swal.fire({
                icon: 'warning',
                title: 'Error 400',
                text: 'Usuario o clave incorrecto ',
                confirmButtonText: 'Aceptar'
                });
                navigate('/login');
        }else if(logInUser.status === 200) {
            setMedic(logInUser.data.userFound)
            window.localStorage.setItem('correo', logInUser.data.userFound.correo);
            window.localStorage.setItem('usuario', logInUser.data.userFound.nombre);
            window.localStorage.setItem('cargo', logInUser.data.userFound.cargo);
            window.localStorage.setItem('rut', logInUser.data.userFound.rut);
            window.localStorage.setItem('imgUrl', logInUser.data.userFound.imgUrl);
            navigate('/');
        }
        
    }
    
        return (

            <form onSubmit={ submitForm } className="login-form">
                <div className="row">
                    <div className="logo col-md-3 my-4 login-img-form"> <img alt="hey" src={require('../assets/images/favicon.png')} className="img-fluid img_form"/> </div>
                <div className="d-flex align-items-center col-md-9 my-4 login-tittle-form">
                    <h1 className="fw-normal mb-1 me-3">¡Bienvenido!</h1>
                </div>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label">Usuario</label>
                    <input type="email" className="form-control form-control-lg" name="correo"  
                    placeholder="Email" onChange={ handleChange} value= {setUser.correo} />
                </div>
                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" name="clave" className="form-control form-control-lg"
                    placeholder="Contraseña" onChange={ handleChange} value= {user.clave} />
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
                    
                    <input LinkTo='/' type="submit" name="submit" className="btn btn-primary" value="Acceder"></input>
                    <p> </p><br />
                </div>
            </form>
        )
}
export default authLayout(LoginPage);