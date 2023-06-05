import './assets/css/app.css'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './auth/loginPage'
import PageError from './auth/errorPage'
import PrivateRoutes from './component/privateRoute'
import ResetPassword from './auth/resetPassword'
import HomePage from './general/homePage';
import SamplePage from './Muestra/Components/sampleLayout'
import ProfilePage from './Medico/Components/profilePage';
import MedicoLayout from './Medico/Components/MedicoLayout'
import PacienteLayout from './Paciente/Components/pacienteLayout';
import ResultLayout from './Resultado/Components/resultLayout';



function App() {
  return (
    <Router>
            <Routes>
              <Route element={< PrivateRoutes />}>
              
              </Route>
              
              <Route exact path='/' element={<HomePage/>} />
              <Route exact path='/login' element={< LoginPage />}/>
              <Route exact path='/perfil' element={<ProfilePage/>} />
              <Route exact path='/medico' element={<MedicoLayout/>} />
              <Route exact path='/muestra' element={<SamplePage/>} />
              <Route exact path='/paciente' element={<PacienteLayout/>} />
              <Route exact path='/reset-password' element={<ResetPassword/>} />
              <Route exact path='/resultado' element={<ResultLayout/>} />
              <Route exact path='/*' element={<PageError/>} />

            </Routes>
    </Router>
    
  );
}

export default App;
