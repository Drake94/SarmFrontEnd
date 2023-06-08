import React from 'react';
import {Outlet, Navigate, } from "react-router-dom";

const PrivateRoute = () => {
    var user = localStorage.getItem('correo');
    //console.log(user)
    if(user === null) {

        var auth = {'token': false}

    }else{
       auth = {'token': true}
    }
    
    //console.log(auth.token);

    //let auth = {'token': true}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>

    )

}
export default PrivateRoute;